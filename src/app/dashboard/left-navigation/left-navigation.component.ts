import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { selectCompany } from '../../state/company.selectors';
import { Store } from '@ngrx/store';
import { selectUser } from '../../state/user.selectors';

@Component({
  selector: 'left-navigation-content',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './left-navigation.component.html',
  styleUrl: './left-navigation.component.scss',
})
export class LeftNavigationComponent {
  public company$ = this.store.select(selectCompany);
  public user$ = this.store.select(selectUser);
  
  constructor(private store: Store) {}

}
