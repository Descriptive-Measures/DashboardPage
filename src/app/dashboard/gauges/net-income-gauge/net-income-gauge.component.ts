import { Component, ViewChild, ViewEncapsulation, ElementRef, Input} from '@angular/core';
import { Store } from '@ngrx/store';
import { IncomeStatement } from '../../../models/statements/income_statement.model';

import { jqxGaugeComponent, jqxGaugeModule } from 'jqwidgets-ng/jqxgauge';
import { jqxLinearGaugeComponent, jqxLinearGaugeModule } from 'jqwidgets-ng/jqxlineargauge';
import { IncomeStatementComponent } from '../../statements/income-statement/income-statement.component';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
// import { selectIncomeStatement } from '../state/statement.selectors';


@Component({
  selector: 'app-gauge-net-income',
  standalone: true,
  imports: [jqxGaugeModule, jqxLinearGaugeModule, IncomeStatementComponent, CommonModule],
  templateUrl: './net-income-gauge.component.html',
  styleUrl: './net-income-gauge.component.scss',
  encapsulation: ViewEncapsulation.None
})

export class NetIncomeGaugeComponent {    
  @Input() incomeStatement$!: Observable<Readonly<IncomeStatement> | null>;

  @ViewChild('netIncomeGauge')
  netIncomeGauge!: jqxGaugeComponent; 

  @ViewChild('gaugeValue')
  gaugeValue!: ElementRef;

  net_income: number = 0;

  labels: any = {
    interval: 10,
  };

  ticksMinor: any = { interval: 1, size: '5%' };

  ticksMajor: any = { interval: 10, size: '9%' };

  ranges: any[] =
  [
    { startValue: 0, endValue: 50, style: { fill: '#4bb648', stroke: '#4bb648' }, endWidth: 10, startWidth: 10 },
//    { startValue: 2, endValue: 4, style: { fill: '#fbd109', stroke: '#fbd109' }, endWidth: 10, startWidth: 5 },
//    { startValue: 4, endValue: 8, style: { fill: '#ff8000', stroke: '#ff8000' }, endWidth: 13, startWidth: 10 },
//    { startValue: 8, endValue: 10, style: { fill: '#e02629', stroke: '#e02629' }, endWidth: 16, startWidth: 13 }
  ];

  ngAfterViewInit() {
    this.incomeStatement$.subscribe(statement => {
      this.netIncomeGauge.val(statement?.net_income);
    });
  }
}
