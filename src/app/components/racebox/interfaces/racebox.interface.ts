import { NextRaces } from "../models/nextRaces.model";
import { Race } from "../models/race.model";

export interface IRaceBox {
    nextRaces: NextRaces;
    filteredNextRaces: Race[];
    subscription: any;
    filter: any;
    selectedFilters: (filter: string[]) => void;
    getNextRaces: () => void;
    convertToEUR: (currency: string, amount: number) => number;
    getFilteredRaces: () => void;
}