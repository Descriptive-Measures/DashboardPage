import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Ratios } from '../../../models/ratios.model';
import { jqxLinearGaugeComponent, jqxLinearGaugeModule } from 'jqwidgets-ng/jqxlineargauge';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gauge-return-on-equity',
  standalone: true,
  imports: [CommonModule, jqxLinearGaugeModule],
  templateUrl: './return-on-equity-gauge.component.html',
  styleUrl: './return-on-equity-gauge.component.scss'
})
export class ReturnOnEquityGaugeComponent {
  @Input() ratios$!: Observable<Readonly<Ratios> | null>;

  @ViewChild('returnOnEquityGauge')
  returnOnEquityGauge!: jqxLinearGaugeComponent; 

  @ViewChild('gaugeValue')
  gaugeValue!: ElementRef;

  labels: any = {
    position: 'far',
    interval: 5,
  };

  ticksMinor: any = { interval: 5, size: '7%' };

  ticksMajor: any = { interval: 10, size: '10%' };

  ranges: any[] =
  [
    { startValue: 0, endValue: 7, style: { fill: '#e02629', stroke: '#e02629' }, endWidth: 10, startWidth: 10 }, // Red
    { startValue: 7, endValue: 15, style: { fill: '#fbd109', stroke: '#fbd109' }, endWidth: 10, startWidth: 10 }, // Yellow
    { startValue: 15, endValue: 20, style: { fill: '#4bb648', stroke: '#4bb648' }, endWidth: 10, startWidth: 10 }, // Green
  ];

  ngAfterViewInit() {
    this.ratios$.subscribe(ratios => {
      var return_on_equity = ratios?.return_on_equity || 0
      this.returnOnEquityGauge.val(return_on_equity * 100);
    });
  }
}
