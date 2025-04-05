export interface BalanceSheet {
    company_id: string;
    year: number;
    type: string;
    scale: number;

    cash: number;
    accounts_recievable: number;
    inventory: number;
    prepaid_expenses: number;
    investment_securities: number;
    other_current_assets: number;
    current_assets: number;

    investments: number;
    property_plant_equipment: number;
    accumulated_depreciation: number;
    intangible_assets: number;
    other_assets: number;
    long_term_assets: number;
    total_assets: number;

    accounts_payable: number;
    accrued_liabilities: number;
    short_term_loans_payable: number;
    current_portion_long_term_debt: number;
    current_liabilities: number;

    long_term_debt: number;
    capital_lease_obligations: number;
    deferred_income_tax: number;
    long_term_liabilities: number;

    total_liabilities: number;

    preferred_stock: number;
    common_stock_par_value: number;
    additional_paid_in_capital: number;
    retained_earnings: number;
    stockholders_equity: number;

    total_liability_and_equity: number;
}