import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementBlockComponent } from './statement-block.component';

describe('StatementBlockComponent', () => {
  let component: StatementBlockComponent;
  let fixture: ComponentFixture<StatementBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatementBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatementBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
