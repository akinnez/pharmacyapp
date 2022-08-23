import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorySalesComponent } from './inventory-sales.component';

describe('InventorySalesComponent', () => {
  let component: InventorySalesComponent;
  let fixture: ComponentFixture<InventorySalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventorySalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventorySalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
