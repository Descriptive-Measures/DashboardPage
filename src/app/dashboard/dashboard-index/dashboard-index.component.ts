import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { DashboardContentComponent } from '../dashboard-content/dashboard-content.component';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { LeftNavigationComponent } from '../left-navigation/left-navigation.component';
import { CompanyActions } from '../../state/company.actions';
import { selectUser } from '../../state/user.selectors';


@Component({
  selector: 'dashboard-index',
  standalone: true,
  imports: [
    CommonModule,
    LeftNavigationComponent,
    HeaderComponent, 
    FooterComponent, 
    DashboardContentComponent,
  ],
  templateUrl: './dashboard-index.component.html',
  styleUrl: './dashboard-index.component.scss'
})
export class DashboardIndexComponent {
  constructor(private store: Store) {}
}
