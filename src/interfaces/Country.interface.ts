import { CountryInfo as CountryInfoModel } from './CountryInfo.interface.ts';

export interface Country {
    updated: number;
    country: string;
    countryInfo: CountryInfoModel;
    cases: number;
    todayCases: number;
    deaths: number;
    todayDeaths: number;
    recovered: number;
    active: number;
    critical: number;
    casesPerOneMillion: number;
    deathsPerOneMillion: number;
    tests: number;
    testsPerOneMillion: number;
    continent: number;
}