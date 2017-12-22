import { Observable } from "rxjs/Observable";

export interface IRaceBoxProvider {
    getNextRaces: () => Observable<any>;
}