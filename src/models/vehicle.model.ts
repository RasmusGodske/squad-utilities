import { FactionModel } from './faction.model';

export type VehicleImageModel = {
    back?: string,
    front?: string,
    left?: string,
    right?: string,
    top?: string,
}

export class VehicleModel {
    private _real: VehicleImageModel;
    private _armour: VehicleImageModel;
    private _internal: VehicleImageModel;

    constructor(
        real: VehicleImageModel,
        armour: VehicleImageModel,
        internal: VehicleImageModel,
    ) {
        this._real = real;
        this._armour = armour;
        this._internal = internal;
    }

    public get real() {
        return this._real;
    }

    public get armour() {
        return this._armour;
    }

    public get internal() {
        return this._internal;
    }
}

export class Vehicle {
    private _id: string;
    private _name: string;
    private _thumbnail: string;
    private _model : VehicleModel;
    private _factions: FactionModel[];
    

    constructor(
        id: string,
        name: string,
        thumbnail: string,
        model: VehicleModel,
        factions: FactionModel[],
    ) {
        this._id = id;
        this._name = name;
        this._thumbnail = thumbnail;
        this._model = model;
        this._factions = factions;
    }

    public get id() {
        return this._id;
    }

    public get name() {
        return this._name;
    }

    public get thumbnail() {
        return this._thumbnail;
    }

    public get model() {
        return this._model;
    }

    public get factions() {
        return this._factions;
    }

    public inFaction(factionId: string) : boolean {
        return this.factions.find((faction) => faction.id === factionId) !== undefined;
    }

}