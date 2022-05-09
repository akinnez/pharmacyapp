import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupermarketlistComponent } from './supermarketlist.component';

describe('SupermarketlistComponent', () => {
  let component: SupermarketlistComponent;
  let fixture: ComponentFixture<SupermarketlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupermarketlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupermarketlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
