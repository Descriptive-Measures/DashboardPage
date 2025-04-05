import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectForecastBalanceSheet, selectForecastCashFlowStatement, selectRatios } from '../../state/statement.selectors';

@Component({
  selector: 'app-dashboard-content-left-numbers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-content-left-numbers.component.html',
  styleUrl: './dashboard-content-left-numbers.component.scss'
})
export class DashboardContentLeftNumbersComponent {
  public forecastedBalanceSheet$ = this.store.select(selectForecastBalanceSheet);
  public forecastedCashFlowStatement$ = this.store.select(selectForecastCashFlowStatement);
  public ratios$ = this.store.select(selectRatios);

  constructor(private store: Store) {};
}
