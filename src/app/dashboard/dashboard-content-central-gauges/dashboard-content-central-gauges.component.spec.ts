import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardContentCentralGaugesComponent } from './dashboard-content-central-gauges.component';

describe('DashboardContentCentralGaugesComponent', () => {
  let component: DashboardContentCentralGaugesComponent;
  let fixture: ComponentFixture<DashboardContentCentralGaugesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardContentCentralGaugesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardContentCentralGaugesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
