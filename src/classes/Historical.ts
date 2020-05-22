import { Historical as HistoricalModel, Timeline } from '../interfaces/Historical.interface.ts'
export class Historical {
    public country: string;
    public province: Array<string> | string;
    public timeline: Timeline;

    constructor (data: HistoricalModel) {
        this.country = data.country;
        this.province = data.province;
        this.timeline = data.timeline;
    }
}
