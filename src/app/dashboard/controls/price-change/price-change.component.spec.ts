import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitMarginComponent } from './price-change.component';

describe('ProfitMarginComponent', () => {
  let component: ProfitMarginComponent;
  let fixture: ComponentFixture<ProfitMarginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfitMarginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfitMarginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
