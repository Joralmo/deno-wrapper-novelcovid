import { Continent as ContinentModel } from '../interfaces/Continent.interface.ts';
import { Country as CountryModel } from '../interfaces/Country.interface.ts';
export class Continent {
    public updated: number;
    public cases: number;
    public todayCases: number;
    public deaths: number;
    public todayDeaths: number;
    public recovered: number;
    public active: number;
    public critical: number;
    public continent: string;
    public countries: Array<CountryModel>;

    constructor(data: ContinentModel) {
        this.updated = data.updated;
        this.cases = data.cases;
        this.todayCases = data.todayCases;
        this.deaths = data.deaths;
        this.todayDeaths = data.todayDeaths;
        this.recovered = data.recovered;
        this.active = data.active;
        this.critical = data.critical;
        this.continent = data.continent;
        this.countries = data.countries;
    }
}