
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CashFlowStatement } from '../../../models/statements/cash_flow_statement.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cash-flow-statement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cash-flow-statement.component.html',
  styleUrl: './cash-flow-statement.component.scss'
})
export class CashFlowStatementComponent {
  @Input() cashFlowStatement$!: Observable<Readonly<CashFlowStatement> | null>;
}
