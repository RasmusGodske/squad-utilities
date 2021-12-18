import vehicleJson from "@/assets/vehicles.json";


import { Vehicle, VehicleModel } from "@/models/vehicle.model";
import FactionsRepo from '@/services/FactionsRepo';
import { VehicleImageModel } from '../models/vehicle.model';
import { FactionModel } from '../models/faction.model';
import axios from 'axios';

// const BASE_URL = "https://raw.githubusercontent.com/RasmusGodske/squad-utilities-resources/main";
// const BASE_URL = "http://localhost:8081";

// const MissingImage = `${BASE_URL}/missing-image.jpg`;



export default class VehicleRepo {
    private _vehicles: Vehicle[];
    private _BASE_URL: string;
    private _missingImage: string;

    constructor(BASE_URL: string) {
        this._BASE_URL = BASE_URL;
        this._missingImage = `${BASE_URL}/missing-image.jpg`;
        
        const list: Vehicle[] = [];
        for (const [key, value] of Object.entries(vehicleJson)) {

            const entry = value as {
                name: string,
                categori: string,
                factions: string[],
            }

            const id = key;
            const name = entry.name;
            const categori = entry.categori;

            const realVehicleImageModel = this.getVehicleImageModel(id, "real");
            const armourVehicleImageModel = this.getVehicleImageModel(id, "armour");
            const internalVehicleImageModel = this.getVehicleImageModel(id, "internal");

            const vehicleModel = new VehicleModel(
                realVehicleImageModel,
                armourVehicleImageModel,
                internalVehicleImageModel,
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
                realVehicleImageModel.right ? realVehicleImageModel.right : this._missingImage,
                vehicleModel,
                factions,
                categori,
            );

            list.push(vehicle);

        }

        this._vehicles = list;
    }

    public getImageName(vehId: string, side: string, type: string) {
        const imageName = `${vehId}-${type}-${side}.jpg`;
        const path = `vehicles/${vehId}/${type}`;
        return `${this._BASE_URL}/${path}/${imageName}`;
    }

    private getVehicleImageModel(vehId: string, type: string): VehicleImageModel {
        return {
            back: this.getImageName(vehId, "back", type),
            front: this.getImageName(vehId, "front", type),
            left: this.getImageName(vehId, "left", type),
            right: this.getImageName(vehId, "right", type),
            top: this.getImageName(vehId, "top", type),
        };
    }

    public async getDescription(vehId: string) : Promise<string | undefined> {
        const url = `${this._BASE_URL}/vehicles/${vehId}/description.md`;

        console.log(url);

        return axios({
            method: 'get',
            url: url,
        })
        .then((result) => {
            return result.data;
        })
        .catch((error) => {
            return undefined;
        })
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


// export default new VehicleRepo();