
import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, map, catchError, exhaustMap, withLatestFrom } from "rxjs/operators";
import { AppState } from "./app.state";
import { DescriptiveMeasuresDashboardService } from "../services/dashboard.service"
import { StatementsApiActions } from "./statement.actions"
import { selectAssumptions, selectEndingBalanceSheet, selectIncomeStatement, selectRatios } from "./statement.selectors";
import { of } from "rxjs";

@Injectable()
export class StatementEffects { 
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private dashboardService: DescriptiveMeasuresDashboardService
){}

  loadIncomeStatement$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StatementsApiActions.retrieveIncomeStatement),
      switchMap(action => this.dashboardService.getIncomeStatement(action.company_id, action.year).pipe(
        map(statement => StatementsApiActions.retrieveIncomeStatementSuccess({statement})),
        catchError((error) => of(StatementsApiActions.retrieveIncomeStatementFailure(error)))
      ))
    )
  );

  loadBeginningBalanceSheet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StatementsApiActions.retrieveBeginningBalanceSheet),
      switchMap(action => this.dashboardService.getBalanceSheet(action.company_id, action.year).pipe(
        map(statement => StatementsApiActions.retrieveBeginningBalanceSheetSuccess({statement})),
        catchError((error) => of(StatementsApiActions.retrieveBeginningBalanceSheetFailure(error)))
      ))
    )
  );

  loadBalanceSheet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StatementsApiActions.retrieveEndingBalanceSheet),
      switchMap(action => this.dashboardService.getBalanceSheet(action.company_id, action.year).pipe(
        map(statement => StatementsApiActions.retrieveEndingBalanceSheetSuccess({statement})),
        catchError((error) => of(StatementsApiActions.retrieveEndingBalanceSheetFailure(error)))
      ))
    )
  );


//    loadCashFlowStatement$ = createEffect(() =>
//      this.actions$.pipe(
//        ofType(StatementsApiActions.retrieveCashFlowStatement),
//        switchMap(() => this.dashboardService.getCashFlowStatement().pipe(
//          map(statement => StatementsApiActions.retrieveCashFlowStatementSuccess({statement})),
//          catchError(() => of(StatementsApiActions.retrieveCashFlowStatementFailure))
//        ))
//      )
//    );

  refreshRatios$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        StatementsApiActions.retrieveBeginningBalanceSheetSuccess, 
        StatementsApiActions.retrieveEndingBalanceSheetSuccess, 
        StatementsApiActions.retrieveIncomeStatementSuccess),
      withLatestFrom(this.store.pipe(select(selectIncomeStatement)),
                     this.store.pipe(select(selectEndingBalanceSheet))),
      switchMap(([action, incomeStatement, endingBalanceSheet]) => {
        if(incomeStatement && endingBalanceSheet) {
          return this.dashboardService.getRatios({endingBalanceSheet, incomeStatement}).pipe(
          map(ratios => StatementsApiActions.retrieveRatiosSuccess({ratios})),
          catchError((error) => of(StatementsApiActions.retrieveRatiosFailure(error)))
          )
        }
        else {
          return of(StatementsApiActions.skipRatiosRefresh());
        }
      }
      ) 
    )
  );

  loadForecast$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        StatementsApiActions.retrieveBeginningBalanceSheetSuccess, 
        StatementsApiActions.retrieveEndingBalanceSheetSuccess, 
        StatementsApiActions.retrieveIncomeStatementSuccess, 
        StatementsApiActions.updateAssumptions, 
        StatementsApiActions.retrieveRatiosSuccess,
        StatementsApiActions.updateIncomeChangePercent,
        StatementsApiActions.updateDepreciationLife,
        StatementsApiActions.updateShortTermInterestRate,
        StatementsApiActions.updateLongTermInterestRate,
        StatementsApiActions.updatePriceChangePercent,
        StatementsApiActions.updateInventoryDays,
        StatementsApiActions.updateCollectionPeriod,
        StatementsApiActions.updatePaymentPeriod
      ),
      withLatestFrom(this.store.pipe(select(selectIncomeStatement)),
                     this.store.pipe(select(selectEndingBalanceSheet)),
                     this.store.pipe(select(selectAssumptions)),
                     this.store.pipe(select(selectRatios))
                    ),
      switchMap(([action, incomeStatement, endingBalanceSheet, assumptions, ratios]) => {
        if( incomeStatement && endingBalanceSheet && assumptions && ratios) {
          return this.dashboardService.runForecast({endingBalanceSheet, incomeStatement, ratios, assumptions}).pipe(
            map(forecasted_statements  => StatementsApiActions.runForecastSuccess({forecasted_statements})),
            catchError((error) => of(StatementsApiActions.runForecastFailure(error)))
          )
        }
        else {
          return of(StatementsApiActions.skipForecastRefresh());
        }
      })
    )
  );



}