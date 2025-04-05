import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IncomeStatement } from '../models/statements/income_statement.model';
import { BalanceSheet } from '../models/statements/balance_sheet.model';
import { Assumptions } from '../models/assumptions.model';
import { Ratios } from '../models/ratios.model';
import { CashFlowStatement } from '../models/statements/cash_flow_statement.model';
import { Forecast } from '../models/forecast.model';

export const StatementsApiActions = createActionGroup({
    source: 'Statements API',
    events: {
        'Retrieve Income Statement': props<{company_id: string, year: number}>(),
        'Retrieve Income Statement Success': props<{statement: Readonly<IncomeStatement>}>(),
        'Retrieve Income Statement Failure': props<{error: string}>(),

        'Retrieve Beginning Balance Sheet': props<{company_id: string, year: number}>(),
        'Retrieve Beginning Balance Sheet Success': props<{statement: Readonly<BalanceSheet>}>(),
        'Retrieve Beginning Balance Sheet Failure': props<{error: string}>(),

        'Retrieve Ending Balance Sheet': props<{company_id: string, year: number}>(),
        'Retrieve Ending Balance Sheet Success': props<{statement: Readonly<BalanceSheet>}>(),
        'Retrieve Ending Balance Sheet Failure': props<{error: string}>(),

        'Retrieve Cash Flow Statement': emptyProps(),
        'Retrieve Cash Flow Statement Success': props<{statement: Readonly<CashFlowStatement>}>(),
        'Retrieve Cash Flow Statement Failure': props<{error: string}>(),

        'Retrieve Ratios': props<{ending_balance_sheet: BalanceSheet, income_statement: IncomeStatement}>(),
        'Retrieve Ratios Success': props<{ ratios: Ratios }>(),
        'Retrieve Ratios Failure': props<{ error: string }>(),
        'Skip Ratios Refresh': emptyProps(),

        'Update Current Ratio': props<{ current_ratio: string }>(),
        'Update Inventory Days': props< {days_in_inventory: number}>(),
        'Update Collection Period': props< {collection_period: number}>(),
        'Update Payment Period': props< {payment_period: number}>(),

        'Update Assumptions': props<{ assumptions: Assumptions }>(), // Updates Store Only
        'Update Income Change Percent': props< {income_change_percent: number}>(),
        
        'Update Depreciation Life': props< {depreciation_life: number}>(),
        'Update Short Term Interest Rate': props< {short_term_interest_rate: number}>(),
        'Update Long Term Interest Rate': props< {long_term_interest_rate: number}>(),
        'Update Price Change Percent': props< {price_change_percent: number}>(), 

        'Run Forecast': emptyProps(),
        'Run Forecast Success': props<{forecasted_statements: Forecast}>(),
        'Run Forecast Failure': props<{error: string}>(),
        'Skip Forecast Refresh': emptyProps(),

        'Clear Statement Data': emptyProps(),
    },
});