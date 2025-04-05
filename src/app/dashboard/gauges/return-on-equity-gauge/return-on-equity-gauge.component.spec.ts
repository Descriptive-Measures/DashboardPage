import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnOnEquityGaugeComponent } from './return-on-equity-gauge.component';

describe('ReturnOnEquityGaugeComponent', () => {
  let component: ReturnOnEquityGaugeComponent;
  let fixture: ComponentFixture<ReturnOnEquityGaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReturnOnEquityGaugeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnOnEquityGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
