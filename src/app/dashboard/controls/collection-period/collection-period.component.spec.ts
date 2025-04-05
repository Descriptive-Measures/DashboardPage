import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionPeriodComponent } from './collection-period.component';

describe('CollectionPeriodComponent', () => {
  let component: CollectionPeriodComponent;
  let fixture: ComponentFixture<CollectionPeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionPeriodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
