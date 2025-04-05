
import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, map, catchError, exhaustMap, withLatestFrom } from "rxjs/operators";
import { EMPTY, from, of } from "rxjs";
import { AppState } from "./app.state";
import { DescriptiveMeasuresDashboardService } from "../services/dashboard.service"
import { CompanyActions } from "./company.actions";

@Injectable()
export class CompanyEffects { 
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private dashboardService: DescriptiveMeasuresDashboardService
){}

  // The user effects is where the company is loaded when the user changes.  In case you were looking for it here...

  // The user effects is where the company is cleared when the user logs out.  In case you were looking for it here...

  loadCompany$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CompanyActions.retrieveCompany),
      switchMap(action => this.dashboardService.getCompany(action.company_id).pipe(
        map(company => CompanyActions.retrieveCompanySuccess({company})),
        catchError((error) => of(CompanyActions.retrieveCompanyFailure(error)))
      ))
    )
  );

}