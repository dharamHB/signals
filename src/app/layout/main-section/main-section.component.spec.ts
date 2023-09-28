import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSectionComponent } from './main-section.component';

describe('MainSectionComponent', () => {
  let component: MainSectionComponent;
  let fixture: ComponentFixture<MainSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MainSectionComponent]
    });
    fixture = TestBed.createComponent(MainSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
