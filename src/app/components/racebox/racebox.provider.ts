import { Injectable } from "@angular/core";
import { DataProvider } from "../../providers/data.provider";

@Injectable()
export class RaceBoxProvider {
    constructor(private dataProvider: DataProvider) {
        
    }

    public getNextRaces() {
        return this.dataProvider.getData("../../assets/json/next_races.json");
    }
}
