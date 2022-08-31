import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashNoticeComponent } from './flash-notice.component';

describe('FlashNoticeComponent', () => {
  let component: FlashNoticeComponent;
  let fixture: ComponentFixture<FlashNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashNoticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
