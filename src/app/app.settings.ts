import { Injectable } from "@angular/core";

@Injectable()
export class AppSettings {

    GBPtoEUR: number;
    status: any;
    startingFilter: string[];

    constructor() {
        this.GBPtoEUR = 1.14;
        this.status = { success: "success", failed: "failed" };
        this.startingFilter = ["G", "J", "T"];
    }
}