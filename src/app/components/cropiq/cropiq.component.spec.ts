import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropiqComponent } from './cropiq.component';

describe('CropiqComponent', () => {
  let component: CropiqComponent;
  let fixture: ComponentFixture<CropiqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CropiqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CropiqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
