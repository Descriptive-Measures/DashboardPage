import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetIncomeGaugeComponent } from './net-income-gauge.component';

describe('NetIncomeGaugeComponent', () => {
  let component: NetIncomeGaugeComponent;
  let fixture: ComponentFixture<NetIncomeGaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetIncomeGaugeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetIncomeGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
