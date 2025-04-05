import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashFlowGaugeComponent } from './cash-flow-gauge.component';

describe('CashFlowGaugeComponent', () => {
  let component: CashFlowGaugeComponent;
  let fixture: ComponentFixture<CashFlowGaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashFlowGaugeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashFlowGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
