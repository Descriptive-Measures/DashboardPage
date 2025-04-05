import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { userState } from '../state/user.reducer';
import { UserActions } from '../state/user.actions';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor(private store: Store<userState>) {}

  loadTokenSetLocally(): object {
    const token_set = localStorage.getItem('token_set');
    if (token_set) {
      return { is_logged_in: true, token_set: JSON.parse(token_set)};
    } else {
      return {is_logged_in: false, token_set: null};
    }
  }

  saveTokenSetLocally(token_set: any) {
    localStorage.setItem('token_set', JSON.stringify(token_set));
  }

  clearTokenSetLocally() {
    localStorage.removeItem('token_set');
  }

}
