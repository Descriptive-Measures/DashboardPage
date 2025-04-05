import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashLevelGaugeComponent } from './cash-level-gauge.component';

describe('CashLevelGaugeComponent', () => {
  let component: CashLevelGaugeComponent;
  let fixture: ComponentFixture<CashLevelGaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashLevelGaugeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashLevelGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
