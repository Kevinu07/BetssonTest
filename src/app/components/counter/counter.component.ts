import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/zipAll';

@Component({
    selector: 'component-counter',
    templateUrl: './counter.component.html'
})

export class CounterComponent {
    countDown: Observable<any>;
    @Input() count: number; 
 
    constructor() { }

    ngOnChanges() { 
        this.countDown = Observable.timer(0,1000*60)
            .take(this.count)
            .map(() => --this.count); 
    }
 }