import { Component, ViewChild, ViewEncapsulation, ElementRef, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IncomeStatement } from '../../../models/statements/income_statement.model';

import { jqxGaugeComponent, jqxGaugeModule } from 'jqwidgets-ng/jqxgauge';
import { IncomeStatementComponent } from '../../statements/income-statement/income-statement.component';
import { Observable, take } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CashFlowStatement } from '../../../models/statements/cash_flow_statement.model';
// import { selectIncomeStatement } from '../state/statement.selectors';


@Component({
  selector: 'app-gauge-cash-flow',
  standalone: true,
  imports: [jqxGaugeModule, IncomeStatementComponent, CommonModule],
  templateUrl: './cash-flow-gauge.component.html',
  styleUrl: './cash-flow-gauge.component.scss',
  encapsulation: ViewEncapsulation.None
})

export class CashFlowGaugeComponent {    
  @Input() cashFlowStatement$!: Observable<Readonly<CashFlowStatement> | null>;

  @ViewChild('cashFlowGauge')
  cashFlowGauge!: jqxGaugeComponent; 

  @ViewChild('gaugeValue')
  gaugeValue!: ElementRef;

  cash_flow: number = 0;

  labels: any = {
    interval: 20,
  };

  ticksMinor: any = { interval: 1, size: '5%' };

  ticksMajor: any = { interval: 10, size: '9%' };

  ranges: any[] =
  [
    { startValue: -60, endValue: -1, style: { fill: '#e02629', stroke: '#e02629' }, endWidth: 8, startWidth: 8},
    { startValue: -1, endValue: 0, style: { fill: '#fbd109', stroke: '#fbd109' }, endWidth: 8, startWidth: 8},
    { startValue: 0, endValue: 10, style: { fill: '#ff8000', stroke: '#ff8000' }, endWidth: 8, startWidth: 8 },
    { startValue: 10, endValue: 60, style: { fill: '#4bb648', stroke: '#4bb648' }, endWidth: 8, startWidth: 8 },
  ];

  constructor(private store: Store) {}

  ngAfterViewInit() {
    this.cashFlowStatement$.subscribe(statement => {
      this.cashFlowGauge.value(statement?.net_change_in_cash);
    });

    this.cashFlowStatement$.subscribe(statement => {
      if (statement?.beginning_cash != null && statement?.beginning_cash != undefined) {
        this.ranges[0].endValue = -1 * statement.beginning_cash
        this.ranges[1].startValue = -1 * statement.beginning_cash
        this.cashFlowGauge.ranges(this.ranges)
      }
    });
  }
}
