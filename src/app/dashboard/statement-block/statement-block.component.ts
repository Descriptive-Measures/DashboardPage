import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectEndingBalanceSheet, selectForecastBalanceSheet, selectForecastCashFlowStatement, selectForecastIncomeStatement, selectForecastRatios, selectIncomeStatement, selectRatios } from '../../state/statement.selectors';
import { IncomeStatementComponent } from '../statements/income-statement/income-statement.component';
import { BalanceSheetComponent } from '../statements/balance-sheet/balance-sheet.component';
import { CashFlowGaugeComponent } from '../gauges/cash-flow-gauge/cash-flow-gauge.component';
import { CashFlowStatementComponent } from "../statements/cash-flow-statement/cash-flow-statement.component";
import { CommonModule } from '@angular/common';
import { RatiosComponent } from "../ratios/ratios.component";

@Component({
  selector: 'app-statement-block',
  standalone: true,
  imports: [CommonModule,
    IncomeStatementComponent, BalanceSheetComponent, CashFlowGaugeComponent, CashFlowStatementComponent, RatiosComponent],
  templateUrl: './statement-block.component.html',
  styleUrl: './statement-block.component.scss'
})
export class StatementBlockComponent {
  public incomeStatement$ = this.store.select(selectIncomeStatement);
  public balanceSheet$ = this.store.select(selectEndingBalanceSheet);
  public ratios$ = this.store.select(selectRatios);

  public forecastedIncomeStatement$ = this.store.select(selectForecastIncomeStatement);
  public forecastedBalanceSheet$ = this.store.select(selectForecastBalanceSheet);
  public forecastedCashFlowStatement$ = this.store.select(selectForecastCashFlowStatement);
  public forecastedRatios$ = this.store.select(selectForecastRatios);

  public active_statements = 'notes'

  constructor(private store: Store) {
  }

  show_statements(statement:string) {

  }
  

}
