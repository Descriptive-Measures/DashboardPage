import { createReducer, on } from '@ngrx/store';

import { StatementsApiActions } from './statement.actions';
import { IncomeStatement } from '../models/statements/income_statement.model';
import { BalanceSheet } from '../models/statements/balance_sheet.model';
import { Ratios } from '../models/ratios.model';
import { CashFlowStatement } from '../models/statements/cash_flow_statement.model';
import { Assumptions } from '../models/assumptions.model';

export const statementFeatureKey = 'statements';


export interface balanceSheetState {
  balance_sheet: Readonly<BalanceSheet> | null;
  error: string | null;
  status: string;
}

export interface incomeStatementState {
  income_statement: Readonly<IncomeStatement> | null;
  error: string | null;
  status: string;
}

export interface cashFlowStatementState {
  cash_flow_statement: Readonly<CashFlowStatement> | null;
  error: string | null;
  status: string;
}

export interface ratioState {
  ratios: Ratios | null;
  error: string | null;
  status: string;
}

export interface forecastState {
  balance_sheet: Readonly<BalanceSheet> | null;
  income_statement: Readonly<IncomeStatement> | null;
  cash_flow_statement: Readonly<CashFlowStatement> | null;
  ratios: Readonly<Ratios> | null;
  assumptions: Readonly<Assumptions>;
  status: string;
  error: string | null;
}
export interface statementState {
  forecast_year: number;
  income_statement: incomeStatementState;
  beginning_balance_sheet: balanceSheetState;
  ending_balance_sheet: balanceSheetState;
  cash_flow_statement: cashFlowStatementState;
  ratios: ratioState;
  assumptions: Readonly<Assumptions>;
  forecast: forecastState;
}

export const initialState: statementState = {
  forecast_year: 0,
  income_statement: {
    income_statement: null,
    error: null,
    status: 'pending'
  },
  beginning_balance_sheet: {
    balance_sheet: null,
    error: null,
    status: 'pending'
  },
  ending_balance_sheet: {
    balance_sheet: null,
    error: null,
    status: 'pending'
  },
  cash_flow_statement: {
    cash_flow_statement: null,
    error: null,
    status: 'pending',
  },
  ratios: {
    ratios: null,
    error: "none",
    status: "pending",
  },
  assumptions: {
    income_change_percent: {
      base_value: 0,
      value: 0,
      type: "fixed",
      lower_bound: 0,
      upper_bound: 0,
    },
    depreciation_life: { 
      base_value : 40,
      value: 40,
      type: "fixed",
      lower_bound: 0,
      upper_bound: 0, 
    },
    price_change_percent: {
      base_value : 0,
      value: 0,
      type: "fixed",
      lower_bound: 0,
      upper_bound: 0, 
    },
    short_term_interest_rate: {
      base_value: 2.2,
      value: 2.2,
      type: "fixed",
      lower_bound: 0,
      upper_bound: 0,
    },
    long_term_interest_rate: {
      base_value: 4,
      value: 4,
      type: "fixed",
      lower_bound: 0,
      upper_bound: 0
    },
  },
  forecast:{
    income_statement: null,
    balance_sheet: null,
    cash_flow_statement: null,
    ratios: null,
    assumptions: {    
      income_change_percent: {
      base_value: 0,
      value: 0,
      type: "fixed",
      lower_bound: 0,
      upper_bound: 0,
      },
      depreciation_life: { 
        base_value : 30,
        value: 30,
        type: "fixed",
        lower_bound: 0,
        upper_bound: 0, 
      },
      price_change_percent: {
        base_value : 0,
        value: 0,
        type: "fixed",
        lower_bound: 0,
        upper_bound: 0, 
      },
      short_term_interest_rate: {
        base_value: 6,
        value: 6,
        type: "fixed",
        lower_bound: 0,
        upper_bound: 0,
      },
      long_term_interest_rate: {
        base_value: 8,
        value: 8,
        type: "fixed",
        lower_bound: 0,
        upper_bound: 0
      },
    },
    status: "pending",
    error: "none"
  }
}

export const statementReducer = createReducer(
  initialState,
  on(StatementsApiActions.retrieveIncomeStatement, (state) => ({ 
    ...state, 
    income_statement: {
      income_statement: null,
      error: null,
      status: 'loading'
    }
  })),

  on(StatementsApiActions.retrieveIncomeStatementSuccess, (state, {statement}) =>  ({
    ...state,
    income_statement: {
      ...state.income_statement,
      ...statement,
      error: null,
      status: 'success'
    }
  })),
 
  on(StatementsApiActions.retrieveIncomeStatementFailure, (state, {error}) => ({
    ...state, 
    income_statement: {
      income_statement: null,
      error: error,
      status: 'error'
    }
  })),

  on(StatementsApiActions.retrieveEndingBalanceSheet, (state) => ({ 
    ...state, 
    ending_balance_sheet: {
      balance_sheet: null,
      error: null,
      status: 'loading'
    }
  })),

  on(StatementsApiActions.retrieveEndingBalanceSheetSuccess, (state, {statement}) =>  ({
    ...state,
    ending_balance_sheet: {
      ...state.ending_balance_sheet,
      ...statement,
      error: null,
      status: 'success'
    }
  })),

  on(StatementsApiActions.retrieveEndingBalanceSheetFailure, (state, {error}) => ({
    ...state, 
    ending_balance_sheet: {
      balance_sheet: null,
      error: error,
      status: 'error'
    }
  })),

  on(StatementsApiActions.retrieveCashFlowStatement, (state) => ({ 
    ...state, 
    cash_flow_statement: {
      cash_flow_statement: null,
      error: null,
      status: 'loading'
    }
  })),
 
  on(StatementsApiActions.retrieveCashFlowStatementSuccess, (state, {statement}) =>  ({
    ...state,
    cash_flow_statement: {
      cash_flow_statement: statement,
      error: null,
      status: 'success'
    }
  })),
 
  on(StatementsApiActions.retrieveCashFlowStatementFailure, (state, {error}) => ({
    ...state, 
    cash_flow_statement: {
      cash_flow_statement: null,
      error: error,
      status: 'error'
    }
  })),

  on(StatementsApiActions.retrieveRatios, (state) => ({ 
    ...state, 
    ratios: {
      ratios: null,
     error: null,
     status: "loading"
    }
  })),

  on(StatementsApiActions.retrieveRatiosSuccess, (state, {ratios}) =>  ({
    ...state,
    ratios: {
      ratios: ratios,
      error: null,
      status: 'success'
    }
  })),


  on(StatementsApiActions.retrieveRatiosFailure, (state, {error}) => ({
    ...state, 
    ratios: {
      ratios: null,
      error: error,
      status: 'error'
    }
  })),

  on(StatementsApiActions.updateAssumptions, (state, {assumptions}) => ({
    ...state, 
    assumptions: assumptions
  })),

  on(StatementsApiActions.updatePriceChangePercent, (state, {price_change_percent}) => ({
    ...state, 
    assumptions: {
      ...state.assumptions,
      price_change_percent: {
        ...state.assumptions.price_change_percent,
        value: price_change_percent,
        base_value: price_change_percent
      }
    }
  })),

  on(StatementsApiActions.updateIncomeChangePercent, (state, {income_change_percent}) => ({
    ...state, 
    assumptions: {
      ...state.assumptions,
      income_change_percent: {
        ...state.assumptions.income_change_percent,
        value:income_change_percent,
        base_value: income_change_percent
      }
    }
  })),

  on(StatementsApiActions.updateInventoryDays, (state, {days_in_inventory}) => ({
    ...state, 
    ratios: {
      ...state.ratios,
      ratios: {
        ...state.ratios.ratios,
        days_in_inventory: days_in_inventory,
      },
    }
  })),

  on(StatementsApiActions.updateCollectionPeriod, (state, {collection_period}) => ({
    ...state, 
    ratios: {
      ...state.ratios,
      ratios: {
        ...state.ratios.ratios,
        average_collection_period: collection_period,
      },
    }
  })),

  on(StatementsApiActions.updatePaymentPeriod, (state, {payment_period}) => ({
    ...state, 
    ratios: {
      ...state.ratios,
      ratios: {
        ...state.ratios.ratios,
        days_purchases_in_payables: payment_period,
      },
    }
  })),

  on(StatementsApiActions.updateDepreciationLife, (state, {depreciation_life}) => ({
    ...state, 
    assumptions: {
      ...state.assumptions,
      depreciation_life: {
        ...state.assumptions.depreciation_life,
        base_value: depreciation_life
      }
    }
  })),

  on(StatementsApiActions.updateShortTermInterestRate, (state, {short_term_interest_rate}) => ({
    ...state, 
    assumptions: {
      ...state.assumptions,
      short_term_interest_rate: {
        ...state.assumptions.short_term_interest_rate,
        base_value: short_term_interest_rate
      }
    }
  })),

  on(StatementsApiActions.updateLongTermInterestRate, (state, {long_term_interest_rate}) => ({
    ...state, 
    assumptions: {
      ...state.assumptions,
      long_term_interest_rate: {
        ...state.assumptions.long_term_interest_rate,
        base_value: long_term_interest_rate
      }
    }
  })),

  on(StatementsApiActions.runForecastSuccess, (state, {forecasted_statements}) =>  ({
    ...state,
    forecast:{
      income_statement: forecasted_statements.income_statement,
      balance_sheet: forecasted_statements.balance_sheet,
      cash_flow_statement: forecasted_statements.cash_flow_statement,
      ratios: forecasted_statements.ratios,
      assumptions: forecasted_statements.assumptions,
      status: "success",
      error: "none"
    }
  })),

  /*on(StatementsApiActions.updateCurrentRatio, (state, {current_ratio}) => ({
    ...state, 
    ...state.ratios.current_ratio: current_ratio,      
    }
  })),*/

  on(StatementsApiActions.clearStatementData, (state) => ({
    ...initialState
  })),
);
