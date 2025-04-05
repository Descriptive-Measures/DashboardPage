import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentRatioGaugeComponent } from './current-ratio-gauge.component';

describe('CurrentRatioGaugeComponent', () => {
  let component: CurrentRatioGaugeComponent;
  let fixture: ComponentFixture<CurrentRatioGaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentRatioGaugeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentRatioGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
