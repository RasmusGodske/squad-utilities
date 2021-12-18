import { FactionModel } from "../models/faction.model";
import axios from 'axios';

export default class FactionsRepo {
    private _factionJson: any;
    private _factions: FactionModel[] = [];
    private _BASE_URL: string;
    private _missingImage: string;

    constructor(BASE_URL: string) {
        this._BASE_URL = BASE_URL;
        this._missingImage = `${BASE_URL}/missing-image.jpg`;
    }

    public get factions(): FactionModel[] {
        return this._factions;
    }

    public getFactionByID(id: string): FactionModel | undefined {
        return this._factions.find(faction => faction.id === id);
    }

    public async load() {
        await this._fetchFactionList();
        this.processFactionList();
    }

    private async _fetchFactionList() {
        const url = `${this._BASE_URL}/factions.json`;

        const factions = await axios({
            method: 'get',
            url: url,
        })
        .then((result) => {
            return result.data;
        })
        .catch((error) => {
            console.warn("Failed to fetch faction.json", error);
            return undefined;
        });

        this._factionJson = factions;
    }

    private processFactionList() {
        for (const [key, value] of Object.entries(this._factionJson)) {

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
                flag_image: `${this._BASE_URL }/${flagUrl}`, // eslint-disable-line
            })

        }
    }
}
