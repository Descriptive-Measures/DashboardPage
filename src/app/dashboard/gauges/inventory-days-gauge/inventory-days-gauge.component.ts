import { Component, ViewChild, ViewEncapsulation, ElementRef, Input, OnInit } from '@angular/core';
import { jqxGaugeComponent, jqxGaugeModule } from 'jqwidgets-ng/jqxgauge';
import { IncomeStatementComponent } from '../../statements/income-statement/income-statement.component';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Ratios } from '../../../models/ratios.model';

@Component({
  selector: 'app-gauge-inventory-days',
  standalone: true,
  imports: [jqxGaugeModule, IncomeStatementComponent, CommonModule],
  templateUrl: './inventory-days-gauge.component.html',
  styleUrl: './inventory-days-gauge.component.scss',
  encapsulation: ViewEncapsulation.None
})

export class InventoryDaysGaugeComponent {    
  @Input() ratios$!: Observable<Readonly<Ratios> | null>;

  @ViewChild('daysInventoryGauge')
  daysInventoryGauge!: jqxGaugeComponent; 

  @ViewChild('gaugeValue')
  gaugeValue!: ElementRef;

  inventory_days: number = 0;

  labels: any = {
    interval: 30,
  };

  ticksMinor: any = { interval: 10, size: '5%' };

  ticksMajor: any = { interval: 30, size: '9%' };

  ranges: any[] =
  [
    { startValue: 0, endValue: 7, style: { fill: '#e02629', stroke: '#e02629' }, endWidth: 10, startWidth: 10 }, // Red (Out of Stock)
    { startValue: 7, endValue: 14, style: { fill: '#ff8000', stroke: '#ff8000' }, endWidth: 10, startWidth: 10 }, // Orange (Very Low Stock)
    { startValue: 14, endValue: 28, style: { fill: '#fbd109', stroke: '#fbd109' }, endWidth: 10, startWidth: 10 }, // Yellow (Low Stock)
    { startValue: 28, endValue: 60, style: { fill: '#4bb648', stroke: '#4bb648' }, endWidth: 10, startWidth: 10 }, // Green (Good Stock)
    { startValue: 60, endValue: 75, style: { fill: '#fbd109', stroke: '#fbd109' }, endWidth: 10, startWidth: 10 }, // Yellow (High Stock)
    { startValue: 75, endValue: 90, style: { fill: '#ff8000', stroke: '#ff8000' }, endWidth: 10, startWidth: 10 }, // Orange (Very High Stock)
    { startValue: 90, endValue: 120, style: { fill: '#e02629', stroke: '#e02629' }, endWidth: 10, startWidth: 10 } // Red (Overstock)
  ];

  ngAfterViewInit() {
    this.ratios$.subscribe(ratios => {
      this.daysInventoryGauge.val(ratios?.days_in_inventory);
    });
  }
}
