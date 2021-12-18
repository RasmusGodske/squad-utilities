import factionsJson from "@/assets/factions.json";
import { FactionModel } from "../models/faction.model";

export default class FactionsRepo {
    private _factions: FactionModel[] = [];
    private _BASE_URL: string;
    private _missingImage: string;

    constructor(BASE_URL: string) {
        this._BASE_URL = BASE_URL;
        this._missingImage = `${BASE_URL}/missing-image.jpg`;

        for (const [key, value] of Object.entries(factionsJson)) {

            const entry = value as {
                name: string,
                flag: string,
            };

            const id = key;
            const name = entry.name;
            const flag_image = entry.flag; // eslint-disable-line
            const flagUrl = flag_image ? flag_image : this._missingImage; // eslint-disable-line

            this._factions.push({
                id: id as string,
                name: name as string,
                flag_image: `${BASE_URL}/${flagUrl}`, // eslint-disable-line
            })

        }
    }

    public get factions(): FactionModel[] {
        return this._factions;
    }

    public getFactionByID(id: string): FactionModel | undefined {
        return this._factions.find(faction => faction.id === id);
    }
}
