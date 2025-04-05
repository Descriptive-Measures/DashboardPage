import { Component } from '@angular/core';
import { InventoryLevelComponent } from '../controls/inventory-level/inventory-level.component';
import { CollectionPeriodComponent } from "../controls/collection-period/collection-period.component";
import { PaymentPeriodComponent } from "../controls/payment-period/payment-period.component";

@Component({
  selector: 'app-cash-adjustments',
  standalone: true,
  imports: [InventoryLevelComponent, CollectionPeriodComponent, PaymentPeriodComponent],
  templateUrl: './cash-adjustments.component.html',
  styleUrl: './cash-adjustments.component.scss'
})
export class CashAdjustmentsComponent {

}
