import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesGaugeComponent } from './sales-gauge.component';

describe('SalesGaugeComponent', () => {
  let component: SalesGaugeComponent;
  let fixture: ComponentFixture<SalesGaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesGaugeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
