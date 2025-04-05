import { createReducer, on } from '@ngrx/store';
import { RatiosActions } from './ratios.actions';

export const ratioFeatureKey = 'ratio';

export interface ratioState {
  current_ratio: number | null
  status: string
  error: string | null
}

export const initialState: ratioState = {
  current_ratio: null,
  status: "pending",
  error: "none"
}

