import { Component, ViewChild, ViewEncapsulation, ElementRef, Input, OnInit } from '@angular/core';
import { jqxLinearGaugeComponent, jqxLinearGaugeModule } from 'jqwidgets-ng/jqxlineargauge';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { BalanceSheet } from '../../../models/statements/balance_sheet.model';


@Component({
  selector: 'app-gauge-current-assets',
  standalone: true,
  imports: [jqxLinearGaugeModule, CommonModule],
  templateUrl: './current-assets-gauge.component.html',
  styleUrl: './current-assets-gauge.component.scss',
  encapsulation: ViewEncapsulation.None
})

export class CurrentAssetsGaugeComponent {    
  @Input() balanceSheet$!: Observable<Readonly<BalanceSheet> | null>;

  @ViewChild('currentAssetsGauge')
  currentAssetsGauge!: jqxLinearGaugeComponent; 

  @ViewChild('gaugeValue')
  gaugeValue!: ElementRef;

  labels: any = {
    position: 'near',
    interval: 25,
  };

  ticksMinor: any = { interval: 25, size: '5%' };

  ticksMajor: any = { interval: 100, size: '9%' };

  ranges: any[] =
  [
    { startValue: 0, endValue: 90, style: { fill: '#e02629', stroke: '#e02629' }}, // Red (Current Ratio Too Low)
    { startValue: 180, endValue: 300, style: { fill: '#ff8000', stroke: '#ff8000' }}, // Yellow (Not doing any good above 2.0)
    { startValue: 90, endValue: 180, style: { fill: '#4bb648', stroke: '#4bb648' }}, // Green (Sweet Spot 1.5 - 2.0)
  ];

  ngAfterViewInit() {
    this.balanceSheet$.subscribe(statement => {
      this.currentAssetsGauge.val(statement?.current_assets);
    });
  }
}
