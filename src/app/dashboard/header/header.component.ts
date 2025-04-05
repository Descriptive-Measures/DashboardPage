import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { UserActions } from '../../state/user.actions';
import { selectUser } from '../../state/user.selectors';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private user$ = this.store.select(selectUser);
  faSignOut = faSignOut

  constructor(        
//    private route: ActivatedRoute,
    private router: Router,
    private store: Store
  ) { 
    this.user$.subscribe(user => {
      if (!user.is_logged_in) {
//        this.router.navigate(['/login']);
      }
    });
  }

  logoutUser() {
    this.store.dispatch(UserActions.userLogoff());
  }
}
