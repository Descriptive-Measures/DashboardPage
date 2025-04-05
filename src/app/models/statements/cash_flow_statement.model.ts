export interface CashFlowStatement {
    company_id: string;
    year: number;
    type: string;

    scale: number;

    beginning_cash: number;

    net_income_from_continuing_operations: number;
    depreciation: number;
    operating_profit: number;


    cash_from_change_in_accounts_recievable: number;
    cash_from_change_in_inventory: number;
    cash_from_change_in_prepaid_expenses: number;
    cash_from_change_in_accounts_payable: number;
    cash_from_change_in_taxes_payable: number;
    cash_from_change_in_accrued_liabilities: number;
    cash_from_change_in_deferred_income_tax_liability: number;
    operating_cash_flow: number;

    cash_from_changes_investment_securities: number;
    cash_from_changes_in_investments: number;
    cash_from_changes_in_property_plant_and_equipment: number;
    investing_cash_flow: number;

    cash_from_change_in_other_long_term_liabilities: number;
    cash_from_change_in_short_term_loans_payable: number;
    cash_from_change_in_current_portion_of_long_term_debt: number;
    cash_from_change_in_long_term_debt: number;
    cash_from_change_in_capital_lease_obligation: number;
    cash_from_change_in_preferred_stock: number;
    cash_from_change_in_common_stock: number;
    cash_from_change_in_additional_paid_in_capital: number;
    cash_from_change_in_treasury_stock: number;
    cash_from_stock_sales: number;

    cash_from_change_in_accum_other_comprehensive_income: number;
    financing_cash_flow: number;
    
    net_change_in_cash: number;

    ending_cash: number;
}