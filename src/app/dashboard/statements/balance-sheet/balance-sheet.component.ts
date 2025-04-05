
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BalanceSheet } from '../../../models/statements/balance_sheet.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-balance-sheet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './balance-sheet.component.html',
  styleUrl: './balance-sheet.component.scss'
})
export class BalanceSheetComponent {
  @Input() balanceSheet$!: Observable<Readonly<BalanceSheet> | null>;
}
