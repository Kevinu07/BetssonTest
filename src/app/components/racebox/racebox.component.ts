import { Component } from '@angular/core';
import { IRaceBox } from './interfaces/racebox.interface';
import { RaceBoxProvider } from './racebox.provider';
import { NextRaces } from './models/nextRaces.model';
import { AppSettings } from '../../app.settings';
import { Race } from './models/race.model';
import { FilterService } from '../filter/filter.service';


@Component({
  selector: 'component-racebox',
  templateUrl: './racebox.component.html',
  styleUrls: ['./racebox.component.scss'],
  providers: [RaceBoxProvider]
})

export class RaceBoxComponent implements IRaceBox{
    
    nextRaces: NextRaces;
    filteredNextRaces: Race[];
    subscription: any;
    filter: string[];

    constructor(private raceBoxProv: RaceBoxProvider, private appSettings: AppSettings, private filterService: FilterService) {
        var vm = this;

        vm.filter = appSettings.startingFilter;
        vm.getNextRaces();

    }

    ngOnInit() {
        this.subscription = this.filterService.getFilterChangeEmitter()
          .subscribe(item => this.selectedFilters(item));
    }

    selectedFilters = (filter: string[]): void => {
        this.filter = filter;
        this.getFilteredRaces();
    }

    getNextRaces = (): void => {
        var vm = this;
        vm.raceBoxProv.getNextRaces().subscribe(data => {
            vm.nextRaces = data;
           
            if (vm.nextRaces.status === this.appSettings.status.success){
                vm.filteredNextRaces = vm.nextRaces.data.races.sort((obj1, obj2) => {
                    return vm.convertToEUR(obj2.purse.currency, obj2.purse.amount) - vm.convertToEUR(obj1.purse.currency, obj1.purse.amount);
                });

                vm.getFilteredRaces();
                //console.log(Math.max.apply(Math, this.nextRaces.data.races.map(function(o){var x = vm.ConvertToEUR(o.purse.currency, o.purse.amount); return x;})));
            }
        },
        err => console.log(err));
    }

    getMinsToStart = (timestamp): string => {
        var raceDate = new Date(timestamp*1000);
        // var currentDate = newDate();
        // var diff = Math.abs(raceDate - new Date());
        return null;
    }

    convertToEUR = (currency, amount): number => {
        if(currency === "EUR"){
            return amount;
        } else {
            return amount * this.appSettings.GBPtoEUR;
        }        
    }

    getFilteredRaces = (): void => {
        var vm = this;

        this.filteredNextRaces = this.nextRaces.data.races;
        this.filteredNextRaces = this.filteredNextRaces.filter(function(race) {
            if (vm.filter.indexOf(race.race_type) != -1){
                return true;
            }
            return false;
        });

    }
    
}

