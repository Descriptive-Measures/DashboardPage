import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CashFlowGaugeComponent } from '../gauges/cash-flow-gauge/cash-flow-gauge.component';
import { SalesGaugeComponent } from '../gauges/sales-gauge/sales-gauge.component';
import { NetIncomeGaugeComponent } from '../gauges/net-income-gauge/net-income-gauge.component';
import { selectForecastCashFlowStatement, selectForecastIncomeStatement } from '../../state/statement.selectors';
import { SalesAdjustmentsComponent } from '../sales-adjustments/sales-adjustments.component';
import { ExpenseAdjustmentsComponent } from "../expense-adjustments/expense-adjustments.component";
import { CashAdjustmentsComponent } from "../cash-adjustments/cash-adjustments.component";

@Component({
  selector: 'app-dashboard-content-central-gauges',
  standalone: true,
  imports: [CashFlowGaugeComponent, SalesGaugeComponent, NetIncomeGaugeComponent, SalesAdjustmentsComponent, ExpenseAdjustmentsComponent, CashAdjustmentsComponent],
  templateUrl: './dashboard-content-central-gauges.component.html',
  styleUrl: './dashboard-content-central-gauges.component.scss'
})
export class DashboardContentCentralGaugesComponent {
  public forecastedCashFlowStatement$ = this.store.select(selectForecastCashFlowStatement);
  public forecastedIncomeStatement$ = this.store.select(selectForecastIncomeStatement);

  constructor(private store: Store) {

  };

}
