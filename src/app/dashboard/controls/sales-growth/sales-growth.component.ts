import { Component } from '@angular/core';
import { selectForecastAssumptions, selectForecastRatios } from '../../../state/statement.selectors';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { StatementsApiActions } from '../../../state/statement.actions';

@Component({
  selector: 'app-sales-growth',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sales-growth.component.html',
  styleUrl: './sales-growth.component.scss'
})
export class SalesGrowthComponent {
  public forecastedAsumptions$ = this.store.select(selectForecastAssumptions);
  
  salesGrowthControl = new FormControl(0);

  constructor(private store: Store) {}


  ngAfterViewInit() {
    this.forecastedAsumptions$.pipe(take(1)).subscribe(assumptions => {
      if (assumptions?.income_change_percent != null && assumptions?.income_change_percent != undefined) {
        var set_value = assumptions.income_change_percent.value
        this.salesGrowthControl.setValue(set_value);
      }
    });
    this.salesGrowthControl.valueChanges.subscribe((value) => {
      var new_value:number = 0
      
      if ( value != null ) {
        new_value = value
      } 

      console.log('New value:', value);
      this.store.dispatch(StatementsApiActions.updateIncomeChangePercent({ income_change_percent: new_value }));
    });
  }

}
