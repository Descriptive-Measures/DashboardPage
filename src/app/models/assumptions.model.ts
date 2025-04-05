import { Assumption } from "./assumption.model";

export interface Assumptions {
    depreciation_life: Assumption;
    income_change_percent: Assumption;
    long_term_interest_rate: Assumption;
    price_change_percent: Assumption;
    short_term_interest_rate: Assumption;
}
