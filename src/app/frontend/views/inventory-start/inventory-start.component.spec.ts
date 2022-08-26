import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryStartComponent } from './inventory-start.component';

describe('InventoryStartComponent', () => {
  let component: InventoryStartComponent;
  let fixture: ComponentFixture<InventoryStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
