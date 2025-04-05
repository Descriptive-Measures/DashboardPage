
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IncomeStatement } from '../../../models/statements/income_statement.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-income-statement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './income-statement.component.html',
  styleUrl: './income-statement.component.scss'
})
export class IncomeStatementComponent {
  @Input() incomeStatement$!: Observable<Readonly<IncomeStatement> | null>;
}
