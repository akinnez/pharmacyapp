import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardcontentComponent } from './cardcontent.component';

describe('CardcontentComponent', () => {
  let component: CardcontentComponent;
  let fixture: ComponentFixture<CardcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
