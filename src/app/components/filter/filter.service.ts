import { EventEmitter } from "@angular/core";

export class FilterService {
  filterChange: EventEmitter<string[]> = new EventEmitter();

  constructor() {}

  emitFilterChangeEvent(filters: string[]) {
    this.filterChange.emit(filters);
  }

  getFilterChangeEmitter() {
    return this.filterChange;
  }
}