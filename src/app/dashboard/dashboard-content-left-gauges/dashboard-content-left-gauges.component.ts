import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { PayableDaysGaugeComponent } from '../gauges/payable-days-gauge/payable-days-gauge.component';
import { ReceivableDaysGaugeComponent } from '../gauges/receivable-days-gauge/receivable-days-gauge.component';
import { selectForecastBalanceSheet, selectForecastCashFlowStatement, selectForecastIncomeStatement, selectForecastRatios, selectRatios } from '../../state/statement.selectors';
import { InventoryDaysGaugeComponent } from '../gauges/inventory-days-gauge/inventory-days-gauge.component';
import { CashLevelGaugeComponent } from '../gauges/cash-level-gauge/cash-level-gauge.component';

@Component({
  selector: 'app-dashboard-content-left-gauges',
  standalone: true,
  imports: [NgFor, CommonModule, PayableDaysGaugeComponent, ReceivableDaysGaugeComponent, InventoryDaysGaugeComponent, CashLevelGaugeComponent],
  templateUrl: './dashboard-content-left-gauges.component.html',
  styleUrl: './dashboard-content-left-gauges.component.scss'
})
export class DashboardContentLeftGaugesComponent {
  public forecastedIncomeStatement$ = this.store.select(selectForecastIncomeStatement);
  public forecastedCashFlowStatement$ = this.store.select(selectForecastCashFlowStatement);
  public forecastedBalanceSheet$ = this.store.select(selectForecastBalanceSheet);
  public ratios$ = this.store.select(selectRatios);
  public forecastedRatios$ = this.store.select(selectForecastRatios);

  constructor(private store: Store) {};
}
