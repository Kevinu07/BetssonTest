import { Component, Output, EventEmitter } from '@angular/core';
import { AppSettings } from '../../app.settings';
import { IFilter } from './Interfaces/filter.interface';
import { Filter } from './models/filter.model';
import { FilterService } from './filter.service';

@Component({
  selector: 'component-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent implements IFilter{
    
    filters: Filter[];
    filter: string[];
    
    constructor(private filterService: FilterService, private appSettings: AppSettings) {
        this.initializeFilters();
        this.filter = appSettings.startingFilter;
    }

    change = (filter: Filter):void => {
        filter.checked = !filter.checked;

        this.filter = [];

        this.filters.forEach(element => {
            if (element.checked){
                this.filter.push(element.race_type);
            }
        });

        this.selectedFilters(this.filter);
    }

    selectedFilters(filter: string[]):void {
        this.filterService.emitFilterChangeEvent(filter);
    }

    initializeFilters = ():void => {
        this.filters =  [
            {
                "name": "gallop",
                "race_type": "G",
                "checked": true
            },
            {
                "name": "jumps",
                "race_type": "J",
                "checked": true
            },
            {
                "name": "trot",
                "race_type": "T",
                "checked": true
            },
            {
                "name": "greyhounds",
                "race_type": "D",
                "checked": false
            }
        ];
    }

}
