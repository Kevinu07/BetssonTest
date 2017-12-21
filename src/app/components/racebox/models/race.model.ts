import { EventType } from "./eventType.model";
import { Purse } from "./purse.model";
import { Runner } from "./runner.model";

export class Race {
    constructor() {

    }

    public id_race: number;
    public event: EventType;
    public race_type: string;
    public post_time: number;
    public num_runners: number;
    public distance: number;
    public purse: Purse;
    public runners: Runner[];
}