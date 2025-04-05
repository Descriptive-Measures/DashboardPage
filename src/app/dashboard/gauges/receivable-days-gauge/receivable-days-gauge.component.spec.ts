import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivableDaysGaugeComponent } from './receivable-days-gauge.component';

describe('ReceivableDaysGaugeComponent', () => {
  let component: ReceivableDaysGaugeComponent;
  let fixture: ComponentFixture<ReceivableDaysGaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceivableDaysGaugeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceivableDaysGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
