import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardContentLeftNumbersComponent } from './dashboard-content-left-numbers.component';

describe('DashboardContentLeftNumbersComponent', () => {
  let component: DashboardContentLeftNumbersComponent;
  let fixture: ComponentFixture<DashboardContentLeftNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardContentLeftNumbersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardContentLeftNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
