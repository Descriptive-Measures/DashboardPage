import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesAdjustmentsComponent } from './sales-adjustments.component';

describe('SalesAdjustmentsComponent', () => {
  let component: SalesAdjustmentsComponent;
  let fixture: ComponentFixture<SalesAdjustmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesAdjustmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesAdjustmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
