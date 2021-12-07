import vehicleJson from "@/assets/vehicles.json";


import { Vehicle, VehicleModel } from "@/models/vehicle.model";
import FactionsRepo from '@/services/FactionsRepo';
import { VehicleImageModel } from "../models/vehicle.model";
import { FactionModel } from '../models/faction.model';

const BASE_URL = "http://localhost:9090";

const MissingImage = "/missing-image.png";


class VehicleRepo {
    private _vehicles: Vehicle[];

    constructor() {
        const list: Vehicle[] = [];

        for (const [key, value] of Object.entries(vehicleJson)) {

            const entry = value as {
                name: string,
                thumbnail: string,
                factions: string[],
                images: {
                    real: any,
                    armourModel: any,
                }
            }

            const id = key;
            const name = entry.name;

            const thumbnail = entry.thumbnail ? entry.thumbnail : MissingImage;

            const thumbnailUrl = `${BASE_URL}/${thumbnail}`;

            // Real images
            const entryImagesReal = entry.images.real;

            const realImgBack = entryImagesReal.back ? entryImagesReal.back : MissingImage;
            const realImgFront = entryImagesReal.front ? entryImagesReal.front : MissingImage;
            const realImgRight = entryImagesReal.right ? entryImagesReal.right : MissingImage;
            const realImgLeft = entryImagesReal.left ? entryImagesReal.left : MissingImage;
            const realImgTop = entryImagesReal.top ? entryImagesReal.top : MissingImage;

            const realVehicleImageModel: VehicleImageModel = {
                back: `${BASE_URL}/${realImgBack}`,
                front: `${BASE_URL}/${realImgFront}`,
                left: `${BASE_URL}/${realImgLeft}`,
                right: `${BASE_URL}/${realImgRight}`,
                top: `${BASE_URL}/${realImgTop}`,
            }

            // Armour images
            const entryImagesArmour = entry.images.armourModel;

            const armourImgBack = entryImagesArmour.back ? entryImagesArmour.back : MissingImage;
            const armourImgFront = entryImagesArmour.front ? entryImagesArmour.front : MissingImage;
            const armourImgRight = entryImagesArmour.right ? entryImagesArmour.right : MissingImage;
            const armourImgLeft = entryImagesArmour.left ? entryImagesArmour.left : MissingImage;
            const armourImgTop = entryImagesArmour.top ? entryImagesArmour.top : MissingImage;

            const armourVehicleImageModel: VehicleImageModel = {
                back: `${BASE_URL}/${armourImgBack}`,
                front: `${BASE_URL}/${armourImgFront}`,
                left: `${BASE_URL}/${armourImgLeft}`,
                right: `${BASE_URL}/${armourImgRight}`,
                top: `${BASE_URL}/${armourImgTop}`,
            }

            const vehicleModel = new VehicleModel(
                realVehicleImageModel,
                armourVehicleImageModel,
            )

            const factions: FactionModel[] = [];

            for (const factionId of entry.factions) {
                const faction = FactionsRepo.getFactionByID(factionId);
                if (faction) {
                    factions.push(faction);
                }
            }

            const vehicle = new Vehicle(
                id,
                name,
                thumbnailUrl,
                vehicleModel,
                factions,
            );

            list.push(vehicle);

        }

        this._vehicles = list;
    }

    public get vehicles() {
        return this._vehicles;
    }

    public getVehicleByID(id: string) {
        const vehicle = this._vehicles.find((veh) => veh.id === id);
        return vehicle;
    }

    public getVehiclesInFaction(factionID: string): Vehicle[] {
        const vehicles = this._vehicles.filter(veh => veh.inFaction(factionID));
        return vehicles;
    }
}


export default new VehicleRepo();