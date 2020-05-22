import { Country, Countries, Continent, Continents, State, States, Historical } from "./Classes.ts";
import { RequestHelper } from "./helpers/RequestHelper.ts";
import { Endpoints } from "./helpers/Endpoints.ts";
import { WrapperNovelError } from "./helpers/WrapperNovelError.ts";

export class Client {
    private requestHelper: RequestHelper;
    public constructor() {
        this.requestHelper = new RequestHelper();
    }

    async countries(opts?: Options.country): Promise<Array<Country>> {
        try {
            const allCountries = await this.requestHelper.request(Endpoints.COUNTRIES(opts));
            const result: Array<Country> = allCountries.map((country: Country) => new Country(country));
            return result;
        } catch (error) {
            throw new WrapperNovelError(error);
        }
    }

    async country(country: string): Promise<Country> {
        try {
            const _country: Country = await this.requestHelper.request(Endpoints.COUNTRY(country));
            return _country;
        } catch (error) {
            throw new WrapperNovelError(error);
        }
    }

    async continents(opts?: Options.continents): Promise<Array<Continent>> {
        try {
            const _continents = await this.requestHelper.request(Endpoints.CONTINENTS(opts));
            const _result: Array<Continent> =  _continents.map((continent: Continent) => new Continent(continent))
            return _result;
        } catch (error) {
            throw new WrapperNovelError(error);
        }
    }

    async continent(continent: string): Promise<Continent> {
        try {
            const _continent = await this.requestHelper.request(Endpoints.CONTINENT(continent));
            const _result =  new Continent(_continent);
            return _result;
        } catch (error) {
            throw new WrapperNovelError(error);
        }
    }

    async states(opts?: Options.states): Promise<Array<State>> {
        try {
            const _states = await this.requestHelper.request(Endpoints.STATES(opts));
            const states: Array<State> = _states.map((state: State) => new State(state));
            return states;
        } catch (error) {
            throw new WrapperNovelError(error);
        }
    }

    async state(state: string): Promise<State> {
        try {
            const _state = await this.requestHelper.request(Endpoints.STATE(state));
            const _result: State = new State(_state);
            return _result;
        } catch (error) {
            throw new WrapperNovelError(error);
        }
    }

    async historical(opts?: Options.historical): Promise<Historical | Array<Historical>> {
        try {
            if(!opts) {
                const _historicals = await this.requestHelper.request(Endpoints.HISTORICAL())
                const _result: Array<Historical> = _historicals.map((h:Historical) => new Historical(h))
                return _result;
            } 
            let endpoint: string;
            endpoint = Endpoints.HISTORICAL_COUNTRY(opts.country, opts.days);
            if (opts.province) {
                endpoint = Endpoints.HISTORICAL_PROVINCE(opts.country, opts.province, opts.days);
            }
            const _historical = await this.requestHelper.request(endpoint);
            const _result: Historical = new Historical(_historical);
            return _result;
        } catch (error) {
            throw new WrapperNovelError(error);
        }
    }

    //TODO
    /**
     * NYT (Data from New York Times)
     * Apple (Mobility data from Apple)
     * Gov (Government specific data)
     * JHUCSSE (Data from Johns Hopkins University)
     * Historical all
     */
}

export namespace Options {
    export interface country {
        sort?: string,
        yesterday?: boolean
    }

    export interface continents {
        sort?: string
    }

    export interface states {
        sort?: string
    }

    export interface historical {
        days: number,
        country: string,
        province?: string,
    }
}