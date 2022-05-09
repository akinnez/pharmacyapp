import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupermarketeditComponent } from './supermarketedit.component';

describe('SupermarketeditComponent', () => {
  let component: SupermarketeditComponent;
  let fixture: ComponentFixture<SupermarketeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupermarketeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupermarketeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
