import { Component, ViewChild, ViewEncapsulation, ElementRef, Input, OnInit } from '@angular/core';
import { IncomeStatement } from '../../../models/statements/income_statement.model';
import { jqxGaugeComponent, jqxGaugeModule } from 'jqwidgets-ng/jqxgauge';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gauge-sales',
  standalone: true,
  imports: [jqxGaugeModule, CommonModule],
  templateUrl: './sales-gauge.component.html',
  styleUrl: './sales-gauge.component.scss',
  encapsulation: ViewEncapsulation.None
})

export class SalesGaugeComponent {    

  
  @Input() incomeStatement$!: Observable<Readonly<IncomeStatement> | null>;

  @ViewChild('salesGauge')
  salesGauge!: jqxGaugeComponent; 

  @ViewChild('gaugeValue')
  gaugeValue!: ElementRef;

  sales: number = 0;

  labels: any = {
    interval: 200,
  };

  ticksMinor: any = { interval: 50, size: '5%' };

  ticksMajor: any = { interval: 100, size: '9%' };

  ranges: any[] =
    [
      { startValue: 0, endValue: 2000, style: { fill: '#4bb648', stroke: '#4bb648' }, endWidth: 10, startWidth: 10 },
//      { startValue: 855, endValue: 900, style: { fill: '#fbd109', stroke: '#fbd109' }, endWidth: 10, startWidth: 10 },
//      { startValue: 900, endValue: 1002, style: { fill: '#ff8000', stroke: '#ff8000' }, endWidth: 10, startWidth: 10 },
//      { startValue: 1002, endValue: 2000, style: { fill: '#e02629', stroke: '#e02629' }, endWidth: 10, startWidth: 10 }
    ]; 

  ngAfterViewInit() {
    this.incomeStatement$.subscribe(statement => {
      this.salesGauge.val(statement?.sales);
    });
  }
}
