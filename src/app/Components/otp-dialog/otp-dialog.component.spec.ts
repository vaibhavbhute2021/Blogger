import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OTPDialogComponent } from './otp-dialog.component';

describe('OTPDialogComponent', () => {
  let component: OTPDialogComponent;
  let fixture: ComponentFixture<OTPDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OTPDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OTPDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
