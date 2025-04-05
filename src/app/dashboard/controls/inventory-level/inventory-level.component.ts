import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectForecastRatios } from '../../../state/statement.selectors';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { take } from 'rxjs';
import { StatementsApiActions } from '../../../state/statement.actions';

@Component({
  selector: 'app-inventory-level',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './inventory-level.component.html',
  styleUrl: './inventory-level.component.scss'
})
export class InventoryLevelComponent {
  public forecastRatios$ = this.store.select(selectForecastRatios);
  
  inventoryChangeControl = new FormControl(0);

  constructor(private store: Store) {}

  ngAfterViewInit() {
    this.forecastRatios$.pipe(take(3)).subscribe(ratios => {
      if (ratios?.days_in_inventory != null && ratios?.days_in_inventory != undefined) {
        var set_value = Math.round(ratios.days_in_inventory)
        this.inventoryChangeControl.setValue(set_value);
      }
    });
    this.inventoryChangeControl.valueChanges.subscribe((value) => {
      var new_value:number = 0
      if ( value != null ) {
        new_value = value
      } 
      this.store.dispatch(StatementsApiActions.updateInventoryDays({ days_in_inventory: new_value}));
    });
  }
}
