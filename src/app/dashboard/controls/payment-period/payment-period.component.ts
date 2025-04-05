import { Component } from '@angular/core';
import { selectForecastRatios } from '../../../state/statement.selectors';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { StatementsApiActions } from '../../../state/statement.actions';

@Component({
  selector: 'app-payment-period',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './payment-period.component.html',
  styleUrl: './payment-period.component.scss'
})
export class PaymentPeriodComponent {
  public forecastRatios$ = this.store.select(selectForecastRatios);
  
  paymentPeriodChangeControl = new FormControl(0);

  constructor(private store: Store) {}

  ngAfterViewInit() {
    this.forecastRatios$.pipe(take(3)).subscribe(ratios => {
      if (ratios?.days_purchases_in_payables != null && ratios?.days_purchases_in_payables != undefined) {
        var set_value = Math.round(ratios.days_purchases_in_payables)
        this.paymentPeriodChangeControl.setValue(set_value);
      }
    });
    this.paymentPeriodChangeControl.valueChanges.subscribe((value) => {
      var new_value:number = 0
      if ( value != null ) {
        new_value = value
      } 
      this.store.dispatch(StatementsApiActions.updatePaymentPeriod({ payment_period: new_value}));
    });
  }
}
