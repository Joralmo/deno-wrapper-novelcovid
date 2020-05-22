import { Country as CountryModel } from './Country.interface.ts';

export interface Continent {
    updated: number;
    cases: number;
    todayCases: number;
    deaths: number;
    todayDeaths: number;
    recovered: number;
    active: number;
    critical: number;
    continent: string;
    countries: Array<CountryModel>;
}