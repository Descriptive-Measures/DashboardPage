
import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, map, catchError, exhaustMap, withLatestFrom, tap, filter } from "rxjs/operators";
import { of } from "rxjs";
import { AppState } from "./app.state";
import { DescriptiveMeasuresUserService } from "../services/user.service";
import { LocalStorageService } from "../services/local-storage.service";
import { UserActions } from "./user.actions";
import { selectUser, selectUserTokenSet } from "./user.selectors";
import { ActivatedRoute, Router } from "@angular/router";
import { CompanyActions } from "./company.actions";
import { StatementsApiActions } from "./statement.actions";

@Injectable()
export class UserEffects { 
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router,
    private userService: DescriptiveMeasuresUserService,
    private localStorageService: LocalStorageService,
){}

  loadUserState$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUserState),
      switchMap(action => of(this.localStorageService.loadTokenSetLocally()).pipe(
        map(token_status => UserActions.thawTokenSet({token_status: token_status})),
        catchError((error) => of(UserActions.tokenError(error)))
      ))
    )
  )
  
  retrieveUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.thawTokenSet, UserActions.loginSuccess),
      withLatestFrom(this.store.pipe(select(selectUserTokenSet))),
      switchMap(([action, token_set]) => {
        if(token_set) {
          return this.userService.getUser().pipe(
            map(user => UserActions.retrieveUserSuccess({user: user})),
            catchError((error) => of(UserActions.userError(error)))
          )
        }
        else {
          return of(UserActions.skipUserRetrieve());
        }
      }
      ) 
    )
  );

  getCompanyAfterUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.retrieveUserSuccess),
      withLatestFrom(this.store.pipe(select(selectUser))),
      switchMap(([action, user]) => {
        if(user.company_id) {
          return of(CompanyActions.retrieveCompany({company_id: user.company_id}))
        }
        else {
          return of(CompanyActions.skipRetrieveCompany());
        }
      }
      ) 
    )
  );

  loginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.userLogin),
      switchMap(action => this.userService.getToken(action.username, action.password).pipe(
        map(token_set => UserActions.loginSuccess({token_set})),
        catchError((error) => of(UserActions.userError(error)))
      ))
    )
  );

  saveUserState$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loginSuccess),
      switchMap(action => of(this.localStorageService.saveTokenSetLocally(action.token_set)).pipe(
        map(token_set => UserActions.freezeTokenSet({token_set: token_set})),
        catchError((error) => of(UserActions.tokenError(error)))
      ))
    )
  );

  removeLocalTokenSet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.userLogoff),
      switchMap(action => of(this.localStorageService.clearTokenSetLocally()).pipe(
        map(token_set => UserActions.clearTokenSet()))
    )
  ));

  clearCompanyData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.userLogoff),
      switchMap((action) => of(CompanyActions.clearCompanyData()))
    )
  );

  clearStatementData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.userLogoff),
      switchMap((action) => of(StatementsApiActions.clearStatementData()))
    )
  );

  logoutSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(UserActions.logoffSuccess),
        exhaustMap(() => this.router.navigate(['/login']))
      );
    },
    { dispatch: false }
  );

  /*loginSuccess$ = createEffect( () =>
    this.actions$.pipe(
     ofType(UserActions.thawTokenSet),
     tap(() => this.router.navigate(['/dashboard']))
   ));*/

/*  saveTokens$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        UserActions.loginSuccess,
      ),
      withLatestFrom(this.store.pipe(select(selectUser))),
      switchMap(([action, user]) => {
        if(user) {
          this.localStorageService.setItem('token_set', JSON.stringify(user.token_set))
        }
        else {
          return of(UserActions.skipUserRefresh());
        }
      }
      ) 
    )
  );
*/
/*  refreshTokens$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        UserActions.loginSuccess),
      withLatestFrom(this.store.pipe(select(sele)),
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
  */
}