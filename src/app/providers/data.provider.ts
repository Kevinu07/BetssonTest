import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map';

@Injectable()
export class DataProvider {
    constructor(private http: HttpClient) {

    }

    public getData(dataUrl){
        return this.http.get(dataUrl).map((response: Response) => response as any);
    }

    // public postData(body) {
    //     this.http.post("", body).map((response: Response) => response as any);
    // }
}
