export interface Historical {
    country: string;
    province: Array<string> | string;
    timeline: Timeline;
}
export interface Timeline {
    cases: Object,
    deaths: Object,
    recovered: Object
}