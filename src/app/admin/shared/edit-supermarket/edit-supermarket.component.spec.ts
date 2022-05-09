import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSupermarketComponent } from './edit-supermarket.component';

describe('EditSupermarketComponent', () => {
  let component: EditSupermarketComponent;
  let fixture: ComponentFixture<EditSupermarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSupermarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSupermarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
