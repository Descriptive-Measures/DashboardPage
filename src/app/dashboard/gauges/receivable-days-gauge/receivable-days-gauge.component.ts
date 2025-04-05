import { Component, ViewChild, ViewEncapsulation, ElementRef, Input, OnInit } from '@angular/core';
import { jqxGaugeComponent, jqxGaugeModule } from 'jqwidgets-ng/jqxgauge';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Ratios } from '../../../models/ratios.model';

@Component({
  selector: 'app-gauge-receivable-days',
  standalone: true,
  imports: [jqxGaugeModule, CommonModule],
  templateUrl: './receivable-days-gauge.component.html',
  styleUrl: './receivable-days-gauge.component.scss',
  encapsulation: ViewEncapsulation.None
})

export class ReceivableDaysGaugeComponent {    
  @Input() ratios$!: Observable<Readonly<Ratios> | null>;

  @ViewChild('daysReceivableGauge', { static: false }) daysReceivableGauge!: jqxGaugeComponent; 

  @ViewChild('gaugeValue')
  gaugeValue!: ElementRef;

  payable_days: number = 0;

  labels: any = {
    interval: 30,
  };

  ticksMinor: any = { interval:10, size: '5%' };

  ticksMajor: any = { interval: 30, size: '9%' };

  ranges: any[] =
  [
    { startValue: 0, endValue: 30, style: { fill: '#4bb648', stroke: '#4bb648' }, endWidth: 10, startWidth: 10 }, // Green ( 30 Days)
    { startValue: 30, endValue: 45, style: { fill: '#fbd109', stroke: '#fbd109' }, endWidth: 10, startWidth: 10 }, // Yellow ( 45 Days)
    { startValue: 45, endValue: 90, style: { fill: '#e02629', stroke: '#e02629' }, endWidth: 10, startWidth: 10 } // Red (Too Late!)
  ];

  ngAfterViewInit() {
    this.ratios$.subscribe(ratios => {
      this.daysReceivableGauge.value(ratios?.average_collection_period);
    });
  }
}
