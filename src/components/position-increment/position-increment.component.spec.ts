import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionIncrementComponent } from './position-increment.component';

describe('PositionIncrementComponent', () => {
  let component: PositionIncrementComponent;
  let fixture: ComponentFixture<PositionIncrementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PositionIncrementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PositionIncrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
