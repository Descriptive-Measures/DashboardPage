import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryDaysGaugeComponent } from './inventory-days-gauge.component';

describe('InventoryDaysGaugeComponent', () => {
  let component: InventoryDaysGaugeComponent;
  let fixture: ComponentFixture<InventoryDaysGaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryDaysGaugeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryDaysGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
