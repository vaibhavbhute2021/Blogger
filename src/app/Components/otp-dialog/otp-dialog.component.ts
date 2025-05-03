import { CommonModule } from '@angular/common';
import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatDialogRef , MatDialogModule} from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { ToastService } from '../../Services/toast.service';


@Component({
  selector: 'app-otp-dialog',
  standalone: true,
  imports: [MatDialogModule, CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './otp-dialog.component.html',
  styleUrl: './otp-dialog.component.css'
})
export default class OTPDialogComponent implements OnInit{
  
  fb = inject(FormBuilder);
  otpForm !: FormGroup;
  authService = inject(AuthService);
  router = inject(Router)
  result : any;
  private dialogRef = inject(MatDialogRef<OTPDialogComponent>);
  toastService = inject(ToastService);
  
  ngOnInit(): void {
    this.otpForm = this.fb.group({
      otp : ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]
    })
  }


  verifyOTP() {
    // Prepare the OTP object with email and entered OTP
    const otpObj = {
      email: localStorage.getItem("email"),
      otp: this.otpForm.value.otp
    };
  
    // Call the OTP verification service
    this.authService.verifyOtpService(otpObj).subscribe(
      (result: any) => {
        if (result && result.message) {
          alert(result.message);
          this.otpForm.reset();
          this.dialogRef.close(true); // Close dialog and pass 'OTP VERIFIED' as result
          this.toastService.show("OTP VERIFIED", {type: 'success', autohide: true, showClose: true});

        }
      },
      (error) => {
        this.toastService.show(error.error.message, {type: 'error', autohide: true, showClose: true});
      }
    );
  }
  

}
