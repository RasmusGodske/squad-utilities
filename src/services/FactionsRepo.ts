import factionsJson from "@/assets/factions.json";
import { FactionModel } from "../models/faction.model";

const BASE_URL = "https://raw.githubusercontent.com/RasmusGodske/squad-utilities-resources/main";
const MissingImage = "/missing-image.jpg";

class FactionsRepo {
    private _factions: FactionModel[] = [];
    constructor() {
        for (const [key, value] of Object.entries(factionsJson)) {

            const entry = value as {
                name: string,
                flag: string,
            };

            const id = key;
            const name = entry.name;
            const flag_image = entry.flag; // eslint-disable-line
            const flagUrl = flag_image ? flag_image : MissingImage; // eslint-disable-line

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

export default new FactionsRepo();