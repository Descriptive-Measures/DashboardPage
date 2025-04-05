import { Assumptions } from "./assumptions.model";
import { Ratios } from "./ratios.model";
import { BalanceSheet } from "./statements/balance_sheet.model";
import { CashFlowStatement } from "./statements/cash_flow_statement.model";
import { IncomeStatement } from "./statements/income_statement.model";

export interface Forecast {
    balance_sheet: BalanceSheet;
    income_statement: IncomeStatement;
    cash_flow_statement: CashFlowStatement;
    ratios: Ratios;
    assumptions: Assumptions;
}