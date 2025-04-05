import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseAdjustmentsComponent } from './expense-adjustments.component';

describe('ExpenseAdjustmentsComponent', () => {
  let component: ExpenseAdjustmentsComponent;
  let fixture: ComponentFixture<ExpenseAdjustmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseAdjustmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseAdjustmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
