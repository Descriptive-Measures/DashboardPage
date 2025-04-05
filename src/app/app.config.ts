import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideEffects } from '@ngrx/effects';
import { provideStore, provideState } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { statementFeatureKey, statementReducer } from './state/statement.reducer';
import { companyFeatureKey, companyReducer } from './state/company.reducer';
import { userFeatureKey, userReducer } from './state/user.reducer';

import { CompanyEffects } from './state/company.effects';
import { StatementEffects } from './state/statement.effects';
import { UserEffects } from './state/user.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideStore(),
    provideState( { name: statementFeatureKey , reducer: statementReducer} ),
    provideState( { name: companyFeatureKey , reducer: companyReducer} ),
    provideState( { name: userFeatureKey , reducer: userReducer} ),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ]
};
