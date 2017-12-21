import { Component, Input } from '@angular/core';

@Component({
    selector: 'component-countryflag',
    templateUrl: './countryflag.component.html',
    styleUrls: ['./countryflag.component.scss']
})

export class CountryFlagComponent {
    @Input() flagId: string;
 
    constructor() { }
 }