import { createFeatureSelector } from '@ngrx/store';
import { companyFeatureKey, companyState } from './company.reducer';

export const selectCompany =  createFeatureSelector<companyState>(companyFeatureKey);