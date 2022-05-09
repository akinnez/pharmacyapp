import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDrugsFormComponent } from './add-drugs-form.component';

describe('AddDrugsFormComponent', () => {
  let component: AddDrugsFormComponent;
  let fixture: ComponentFixture<AddDrugsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDrugsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDrugsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
