import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyeditComponent } from './pharmacyedit.component';

describe('PharmacyeditComponent', () => {
  let component: PharmacyeditComponent;
  let fixture: ComponentFixture<PharmacyeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
