import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashAdjustmentsComponent } from './cash-adjustments.component';

describe('CashAdjustmentsComponent', () => {
  let component: CashAdjustmentsComponent;
  let fixture: ComponentFixture<CashAdjustmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashAdjustmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashAdjustmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
