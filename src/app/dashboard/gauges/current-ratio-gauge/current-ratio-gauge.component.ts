import { Component, ViewChild, ViewEncapsulation, ElementRef, Input } from '@angular/core';
import { jqxLinearGaugeModule, jqxLinearGaugeComponent } from 'jqwidgets-ng/jqxlineargauge';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Ratios } from '../../../models/ratios.model';

@Component({
  selector: 'app-gauge-current-ratio',
  standalone: true,
  imports: [CommonModule, jqxLinearGaugeModule],
  templateUrl: './current-ratio-gauge.component.html',
  styleUrl: './current-ratio-gauge.component.scss',
  encapsulation: ViewEncapsulation.None
})

export class CurrentRatioGaugeComponent {    
  @Input() ratios$!: Observable<Readonly<Ratios> | null>;

  @ViewChild('currentRatioGauge')
  currentRatioGauge!: jqxLinearGaugeComponent; 

  @ViewChild('gaugeValue')
  gaugeValue!: ElementRef;

  labels: any = {
    position: 'far',
    interval: 1,
  };

  ticksMinor: any = { interval: .25, size: '5%' };

  ticksMajor: any = { interval: 1, size: '9%' };

  ranges: any[] =
  [
    { startValue: 0, endValue: 1, style: { fill: '#e02629', stroke: '#e02629' }, endWidth: 10, startWidth: 10 }, // Red (Out of Stock)
    { startValue: 1, endValue: 1.5, style: { fill: '#ff8000', stroke: '#ff8000' }, endWidth: 10, startWidth: 10 }, // Orange (Very Low Stock)
    { startValue: 1.5, endValue: 2, style: { fill: '#4bb648', stroke: '#4bb648' }, endWidth: 10, startWidth: 10 }, // Green (Good Stock)
    { startValue: 2, endValue: 3, style: { fill: '#fbd109', stroke: '#fbd109' }, endWidth: 10, startWidth: 10 }, // Yellow (High Stock)
  ];

  ngAfterViewInit() {
    this.ratios$.subscribe(ratios => {
      this.currentRatioGauge.val(ratios?.current_ratio);
    });
  }
}
