import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationSignalComponent } from './calculation-signal.component';

describe('CalculationSignalComponent', () => {
  let component: CalculationSignalComponent;
  let fixture: ComponentFixture<CalculationSignalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CalculationSignalComponent]
    });
    fixture = TestBed.createComponent(CalculationSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
