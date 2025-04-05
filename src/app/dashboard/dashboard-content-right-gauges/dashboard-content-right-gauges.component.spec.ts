import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardContentRightGaugesComponent } from './dashboard-content-right-gauges.component';

describe('DashboardContentRightGaugesComponent', () => {
  let component: DashboardContentRightGaugesComponent;
  let fixture: ComponentFixture<DashboardContentRightGaugesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardContentRightGaugesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardContentRightGaugesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
