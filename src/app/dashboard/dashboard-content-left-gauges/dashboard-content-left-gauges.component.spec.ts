import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardContentLeftGaugesComponent } from './dashboard-content-left-gauges.component';

describe('DashboardContentLeftGaugesComponent', () => {
  let component: DashboardContentLeftGaugesComponent;
  let fixture: ComponentFixture<DashboardContentLeftGaugesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardContentLeftGaugesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardContentLeftGaugesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
