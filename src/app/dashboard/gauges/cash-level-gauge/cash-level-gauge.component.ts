import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { CashFlowStatement } from '../../../models/statements/cash_flow_statement.model';
import { jqxGaugeComponent, jqxGaugeModule } from 'jqwidgets-ng/jqxgauge';

@Component({
  selector: 'app-gauge-cash-level',
  standalone: true,
  imports: [jqxGaugeModule],
  templateUrl: './cash-level-gauge.component.html',
  styleUrl: './cash-level-gauge.component.scss'
})
export class CashLevelGaugeComponent {
  @Input() cashFlowStatement$!: Observable<Readonly<CashFlowStatement> | null>;

  @ViewChild('cashLevelGauge')
  cashLevelGauge!: jqxGaugeComponent; 

  @ViewChild('gaugeValue')
  gaugeValue!: ElementRef;

  payable_days: number = 0;

  labels: any = {
    interval: 25,
  };

  ticksMinor: any = { interval: 5, size: '5%' };

  ticksMajor: any = { interval: 10, size: '9%' };

  ranges: any[] =
  [
    { startValue: 0, endValue: 5, style: { fill: '#e02629', stroke: '#e02629' }, endWidth: 10, startWidth: 10 }, // Red Cash is Low!
    { startValue: 5, endValue: 15, style: { fill: '#fbd109', stroke: '#fbd109' }, endWidth: 10, startWidth: 10 }, // Yellow (30 Days)
    { startValue: 15, endValue: 100, style: { fill: '#4bb648', stroke: '#4bb648' }, endWidth: 10, startWidth: 10 }, // Green ( 60 Days)
    ];

  ngAfterViewInit() {
    this.cashFlowStatement$.subscribe(cash_flow_statement => {
      this.cashLevelGauge.val(cash_flow_statement?.ending_cash);
    });
  }
}
