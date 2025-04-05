import { Component, ViewChild, ViewEncapsulation, ElementRef, Input } from '@angular/core';
import { jqxGaugeComponent, jqxGaugeModule } from 'jqwidgets-ng/jqxgauge';
import { jqxLinearGaugeComponent, jqxLinearGaugeModule } from 'jqwidgets-ng/jqxlineargauge';
import { IncomeStatementComponent } from '../../statements/income-statement/income-statement.component';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Ratios } from '../../../models/ratios.model';
// import { selectIncomeStatement } from '../state/statement.selectors';


@Component({
  selector: 'app-gauge-payable-days',
  standalone: true,
  imports: [jqxGaugeModule, jqxLinearGaugeModule, IncomeStatementComponent, CommonModule],
  templateUrl: './payable-days-gauge.component.html',
  styleUrl: './payable-days-gauge.component.scss',
  encapsulation: ViewEncapsulation.None
})

export class PayableDaysGaugeComponent {    
  @Input() ratios$!: Observable<Readonly<Ratios> | null>;

  @ViewChild('daysPayableGauge')
  daysPayableGauge!: jqxGaugeComponent; 

  @ViewChild('gaugeValue')
  gaugeValue!: ElementRef;

  payable_days: number = 0;

  labels: any = {
    interval: 30,
  };

  ticksMinor: any = { interval: 10, size: '5%' };

  ticksMajor: any = { interval: 30, size: '9%' };

  ranges: any[] =
  [
    { startValue: 0, endValue: 7, style: { fill: '#e02629', stroke: '#e02629' }, endWidth: 10, startWidth: 10 }, // Red (Paying way too soon)
    { startValue: 7, endValue: 10, style: { fill: '#4bb648', stroke: '#4bb648' }, endWidth: 10, startWidth: 10 }, // Green (10/2 )
    { startValue: 10, endValue: 28, style: { fill: '#fbd109', stroke: '#fbd109' }, endWidth: 10, startWidth: 10 }, // Yellow (30 Days)
    { startValue: 28, endValue: 60, style: { fill: '#4bb648', stroke: '#4bb648' }, endWidth: 10, startWidth: 10 }, // Green ( 60 Days)
    { startValue: 60, endValue: 90, style: { fill: '#e02629', stroke: '#e02629' }, endWidth: 10, startWidth: 10 } // Red (Causing Pain for Vendors)
  ];

  ngAfterViewInit() {
    this.ratios$.subscribe(ratios => {
      this.daysPayableGauge.val(ratios?.days_purchases_in_payables);
    });
  }
}
