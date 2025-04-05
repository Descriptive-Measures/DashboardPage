import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayableDaysGaugeComponent } from './payable-days-gauge.component';

describe('PayableDaysGaugeComponent', () => {
  let component: PayableDaysGaugeComponent;
  let fixture: ComponentFixture<PayableDaysGaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayableDaysGaugeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayableDaysGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
