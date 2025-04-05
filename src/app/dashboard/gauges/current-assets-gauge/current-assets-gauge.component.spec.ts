import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentAssetsGaugeComponent } from './current-assets-gauge.component';

describe('CurrentAssetsGaugeComponent', () => {
  let component: CurrentAssetsGaugeComponent;
  let fixture: ComponentFixture<CurrentAssetsGaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentAssetsGaugeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentAssetsGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
