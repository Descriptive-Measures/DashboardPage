import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentLiabilitiesGaugeComponent } from './current-liabilities-gauge.component';

describe('CurrentLiabilitiesGaugeComponent', () => {
  let component: CurrentLiabilitiesGaugeComponent;
  let fixture: ComponentFixture<CurrentLiabilitiesGaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentLiabilitiesGaugeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentLiabilitiesGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
