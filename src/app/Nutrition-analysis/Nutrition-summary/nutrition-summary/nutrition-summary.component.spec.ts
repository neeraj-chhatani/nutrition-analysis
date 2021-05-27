import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionSummaryComponent } from './nutrition-summary.component';

describe('NutritionSummaryComponent', () => {
  let component: NutritionSummaryComponent;
  let fixture: ComponentFixture<NutritionSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutritionSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
