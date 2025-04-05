import { Component, OnInit, inject} from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Store } from '@ngrx/store';
import { StatementsApiActions } from '../../state/statement.actions'
import { DashboardContentLeftGaugesComponent } from '../dashboard-content-left-gauges/dashboard-content-left-gauges.component';
import { DashboardContentCentralGaugesComponent } from '../dashboard-content-central-gauges/dashboard-content-central-gauges.component';
import { DashboardContentRightGaugesComponent } from '../dashboard-content-right-gauges/dashboard-content-right-gauges.component';
import { DashboardContentLeftNumbersComponent } from '../dashboard-content-left-numbers/dashboard-content-left-numbers.component';
import { selectCompany } from '../../state/company.selectors';
import { StatementBlockComponent } from "../statement-block/statement-block.component";

@Component({
  selector: 'app-dashboard-content',
  standalone: true,
  imports: [NgFor, CommonModule, 
    DashboardContentLeftGaugesComponent, DashboardContentCentralGaugesComponent, DashboardContentRightGaugesComponent,
    DashboardContentLeftNumbersComponent, 
    StatementBlockComponent],
  templateUrl: './dashboard-content.component.html',
  styleUrl: './dashboard-content.component.scss',
})
export class DashboardContentComponent implements OnInit{
  public company$ = this.store.select(selectCompany);

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.company$.subscribe(company => {
      if (company.company_id != null) {
        this.store.dispatch(StatementsApiActions.retrieveIncomeStatement({"company_id": company.company_id, "year":2001}))
        this.store.dispatch(StatementsApiActions.retrieveEndingBalanceSheet({"company_id": company.company_id, "year":2001}))
      }
    });
  }

}

