import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacylistComponent } from './pharmacylist.component';

describe('PharmacylistComponent', () => {
  let component: PharmacylistComponent;
  let fixture: ComponentFixture<PharmacylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
