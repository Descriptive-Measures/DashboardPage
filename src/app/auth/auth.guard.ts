import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUser } from '../state/user.selectors';

export const authGuard: CanActivateFn = (route, state) => {
  const store = inject(Store);
  const  router  =  inject(Router);
  const user$ = store.select(selectUser);

  return true;
  var logged_in = false;
  user$.subscribe(user => {logged_in = user.is_logged_in});
  if (logged_in) {
    return true;
  }
  router.navigate(['/login']);
  return false;
};
