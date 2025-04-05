import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryLevelComponent } from './inventory-level.component';

describe('InventoryLevelComponent', () => {
  let component: InventoryLevelComponent;
  let fixture: ComponentFixture<InventoryLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryLevelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
