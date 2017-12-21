import { Filter } from "../models/filter.model";

export interface IFilter {
    filters: Filter[];
    filter: string[];
    change: (filter: Filter) => void;
    selectedFilters: (filter: string[]) => void;
    initializeFilters: () => void;
}