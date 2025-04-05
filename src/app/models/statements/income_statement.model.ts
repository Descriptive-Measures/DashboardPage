export interface IncomeStatement {
    company_id: string;
    year: number;
    type: string;

    scale: number;

    sales: number;
    cost_of_goods: number;
    gross_profit: number;
    depreciation_expense: number;
    other_operating_expenses_gain_loss: number;
    operating_income: number;
    interest_expense: number;
    misc_revenue_expense_gain_loss: number;
    pre_tax_income: number;
    income_tax_expense: number;
    income_from_continuing_operations: number;
    income_from_discontinued_operations: number;
    extraordinary_items: number;
    cumulative_effect_of_accounting_changes: number;
    unrealized_gains_losses_not_in_net_income: number;
    comprehensive_income: number;
    net_income: number;
}
