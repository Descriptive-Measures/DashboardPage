import { createReducer, on } from '@ngrx/store';
import { RatiosActions } from './ratios.actions';
import { CompanyActions } from './company.actions';

export const companyFeatureKey = 'company';

export interface companyState {
  company_id: string | null
  name: string | null
  status: string
  error: string | null
}

export const initialState: companyState = {
  company_id: null,
  name: null,
  status: "pending",
  error: "none"
}


export const companyReducer = createReducer(
  initialState,

  on(CompanyActions.retrieveCompany, (state) => ({ 
    ...state, 
      company_id: null,
      name: null,
      status: 'loading',
      error: null,
  })),

  on(CompanyActions.retrieveCompanySuccess, (state, {company}) =>  ({
    ...state,
      company_id: company.id,
      name: company.name,
      error: null,
      status: 'success'
  })),

  on(CompanyActions.retrieveCompanyFailure, (state, {error}) => ({
    ...state, 
      company_id: null,
      name: null,
      error: error,
      status: 'error'
  })),

  on(CompanyActions.clearCompanyData, (state) => ({
    ...initialState
  })),
);
