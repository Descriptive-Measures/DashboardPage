import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { selectForecastRatios } from '../../../state/statement.selectors';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { StatementsApiActions } from '../../../state/statement.actions';

@Component({
  selector: 'app-collection-period',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './collection-period.component.html',
  styleUrl: './collection-period.component.scss'
})
export class CollectionPeriodComponent {
  public forecastRatios$ = this.store.select(selectForecastRatios);
  
  collectionPeriodChangeControl = new FormControl(0);

  constructor(private store: Store) {}

  ngAfterViewInit() {
    this.forecastRatios$.pipe(take(3)).subscribe(ratios => {
      if (ratios?.average_collection_period != null && ratios?.average_collection_period != undefined) {
        var set_value = Math.round(ratios.average_collection_period)
        this.collectionPeriodChangeControl.setValue(set_value);
      }
    });
    this.collectionPeriodChangeControl.valueChanges.subscribe((value) => {
      var new_value:number = 0
      if ( value != null ) {
        new_value = value
      } 
      this.store.dispatch(StatementsApiActions.updateCollectionPeriod({ collection_period: new_value}));
    });
  }
}
