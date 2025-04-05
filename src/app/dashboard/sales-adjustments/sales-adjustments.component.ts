import { Component } from '@angular/core';
import { ProfitMarginComponent } from '../controls/price-change/price-change.component';
import { SalesGrowthComponent } from '../controls/sales-growth/sales-growth.component';

@Component({
  selector: 'app-sales-adjustments',
  standalone: true,
  imports: [ProfitMarginComponent, SalesGrowthComponent],
  templateUrl: './sales-adjustments.component.html',
  styleUrl: './sales-adjustments.component.scss'
})
export class SalesAdjustmentsComponent {

}
