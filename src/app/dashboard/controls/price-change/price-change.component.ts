import { Component} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { selectForecastAssumptions } from '../../../state/statement.selectors';
import { Store } from '@ngrx/store';
import { StatementsApiActions } from '../../../state/statement.actions';
import { take } from 'rxjs';

@Component({
  selector: 'app-price-change',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './price-change.component.html',
  styleUrl: './price-change.component.scss'
})
export class ProfitMarginComponent {
  public forecastAssumptions$ = this.store.select(selectForecastAssumptions);
  
  priceChangeControl = new FormControl(0);

  constructor(private store: Store) {}

  ngAfterViewInit() {
    this.forecastAssumptions$.pipe(take(1)).subscribe(assumptions => {
      if (assumptions?.price_change_percent != null && assumptions?.price_change_percent != undefined) {
        var set_value = assumptions.price_change_percent.value
        this.priceChangeControl.setValue(set_value);
      }
    });
    this.priceChangeControl.valueChanges.subscribe((value) => {
      var new_value:number = 0
      
      if ( value != null ) {
        new_value = value
      } 
      
      this.store.dispatch(StatementsApiActions.updatePriceChangePercent({ price_change_percent: new_value}));
    });
  }
}

