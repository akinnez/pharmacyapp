import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGoodsFormComponent } from './add-goods.component';

describe('AddGoodsFormComponent', () => {
  let component: AddGoodsFormComponent;
  let fixture: ComponentFixture<AddGoodsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGoodsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGoodsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
