import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestCarComponent } from './best-car.component';

describe('BestCarComponent', () => {
  let component: BestCarComponent;
  let fixture: ComponentFixture<BestCarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BestCarComponent]
    });
    fixture = TestBed.createComponent(BestCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
