import { createSelector, createFeatureSelector } from '@ngrx/store';
//import { IncomeStatement } from '../models/statements/income_statement.model';

import { statementFeatureKey, statementState } from './statement.reducer';

export const selectStatements =  createFeatureSelector<statementState>(statementFeatureKey);

export const selectIncomeStatement =  createSelector(
    selectStatements,
    (state: statementState) => state.income_statement.income_statement
);

export const selectEndingBalanceSheet =  createSelector(
    selectStatements,
    (state: statementState) => state.ending_balance_sheet.balance_sheet
);

export const selectBeginningBalanceSheet =  createSelector(
    selectStatements,
    (state: statementState) => state.beginning_balance_sheet.balance_sheet
);
export const selectRatios =  createSelector(
    selectStatements,
    (state: statementState) => state.ratios.ratios
);
export const selectAssumptions =  createSelector(
    selectStatements,
    (state: statementState) => state.assumptions
);
export const selectForecast =  createSelector(
    selectStatements,
    (state: statementState) => state.forecast
);

export const selectForecastIncomeStatement =  createSelector(
    selectStatements,
    (state: statementState) => state.forecast.income_statement
);

export const selectForecastBalanceSheet =  createSelector(
    selectStatements,
    (state: statementState) => state.forecast.balance_sheet
);

export const selectForecastCashFlowStatement =  createSelector(
    selectStatements,
    (state: statementState) => state.forecast.cash_flow_statement
);

export const selectForecastRatios =  createSelector(
    selectStatements,
    (state: statementState) => state.forecast.ratios
);

export const selectForecastAssumptions =  createSelector(
    selectStatements,
    (state: statementState) => state.forecast.assumptions
);