import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteNotificationComponent } from './delete-notification.component';

describe('DeleteNotificationComponent', () => {
  let component: DeleteNotificationComponent;
  let fixture: ComponentFixture<DeleteNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
