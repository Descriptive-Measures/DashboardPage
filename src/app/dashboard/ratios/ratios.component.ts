
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ratios } from '../../models/ratios.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ratios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ratios.component.html',
  styleUrl: './ratios.component.scss'
})
export class RatiosComponent {
  @Input() ratios$!: Observable<Readonly<Ratios> | null>;
}
