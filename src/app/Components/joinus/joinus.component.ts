import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { confirmPasswordValidator } from '../Validators/confirm_password.validator';
import  LoginFormComponent  from "../login-form/login-form.component";
import { passwordValidator } from '../Validators/password_pattern.validator';
import { MatDialog } from '@angular/material/dialog';
import  OTPDialogComponent  from '../otp-dialog/otp-dialog.component';
import { AuthService } from '../../Services/auth.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { error } from 'console';
import { ToastService } from '../../Services/toast.service';


@Component({
  selector: 'app-joinus',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, MatProgressSpinnerModule],
  templateUrl: './joinus.component.html',
  styleUrl: './joinus.component.css'
})
export default class JoinusComponent implements OnInit{
[x: string]: any;

  fb = inject(FormBuilder);
  router = inject(Router);
  registerForm !: FormGroup;
  loginForm !: FormGroup;
  authService = inject(AuthService)
  private dialog = inject(MatDialog);
  toastService = inject(ToastService);
  isLoading = false;

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName : ['', Validators.required],
      lastName : ['', Validators.required],
      userName : ['', Validators.required],
      email : ['', Validators.compose([Validators.required, Validators.email])],
      phone : ['', [Validators.required, Validators.pattern("^((\\+91-?) |0)?[0-9]{10}$")]],
      password : ['', [Validators.required, passwordValidator()]],
      confirmpassword : ['',Validators.required]
    },
    {
      validator : confirmPasswordValidator('password', 'confirmpassword')
     }
  );  
  }

  registerUser() {
    if (this.registerForm.valid) {
      // Store email in localStorage for OTP verification
      localStorage.setItem("email", this.registerForm.value.email);
  
      // Call the registration service
      this.authService.registerService(this.registerForm.value).subscribe(
        (result: any) => {
          if (result && result.message) {
            alert(result.message);
  
            // Open OTP Dialog and handle the response
            const dialogRef = this.dialog.open(OTPDialogComponent);
            dialogRef.afterClosed().subscribe((result) => {
              if (result) {
                // this.registerForm.reset();
                alert(result.message);
                localStorage.removeItem('email')
                this.router.navigate(['/login']);

              }
            });
          } else {
            alert(result.message);
          }
        },
        (error) => {
          console.error('Error:', error.error.message);
        }
      );
    } else {
      console.log("Form is not valid.");
    }
  }
  
}
