import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodsafetyComponent } from './foodsafety.component';

describe('FoodsafetyComponent', () => {
  let component: FoodsafetyComponent;
  let fixture: ComponentFixture<FoodsafetyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodsafetyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodsafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
