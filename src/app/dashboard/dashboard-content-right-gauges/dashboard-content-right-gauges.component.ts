import { Component } from '@angular/core';
import { CurrentAssetsGaugeComponent } from '../gauges/current-assets-gauge/current-assets-gauge.component';
import { CurrentLiabilitiesGaugeComponent } from '../gauges/current-liabilities-gauge/current-liabilities-gauge.component';
import { selectForecastBalanceSheet, selectForecastRatios } from '../../state/statement.selectors';
import { Store } from '@ngrx/store';
import { CommonModule, NgFor } from '@angular/common';
import { CurrentRatioGaugeComponent } from '../gauges/current-ratio-gauge/current-ratio-gauge.component';
import { ReturnOnEquityGaugeComponent } from "../gauges/return-on-equity-gauge/return-on-equity-gauge.component";

@Component({
  selector: 'app-dashboard-content-right-gauges',
  standalone: true,
  imports: [NgFor, CommonModule, CurrentAssetsGaugeComponent, CurrentLiabilitiesGaugeComponent, CurrentRatioGaugeComponent, ReturnOnEquityGaugeComponent],
  templateUrl: './dashboard-content-right-gauges.component.html',
  styleUrl: './dashboard-content-right-gauges.component.scss'
})
export class DashboardContentRightGaugesComponent {
  public forecastedBalanceSheet$ = this.store.select(selectForecastBalanceSheet);
  public forecastedRatios$ = this.store.select(selectForecastRatios);

  constructor(private store: Store) {};
}
