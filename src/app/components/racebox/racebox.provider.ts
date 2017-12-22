import { Injectable } from "@angular/core";
import { DataProvider } from "../../providers/data.provider";
import { IRaceBoxProvider } from "./interfaces/raceboxprovider.interface";

@Injectable()
export class RaceBoxProvider implements IRaceBoxProvider {
    constructor(private dataProvider: DataProvider) {
        
    }

    public getNextRaces() {
        return this.dataProvider.getData("../../assets/json/next_races.json");
    }
}
