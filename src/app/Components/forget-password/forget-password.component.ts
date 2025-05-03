import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export default class ForgetPasswordComponent implements OnInit{
  
  fb = inject(FormBuilder);
  resetForm !: FormGroup;
  authService =inject(AuthService);
  router = inject(Router)

  ngOnInit(): void {
    this.resetForm = this.fb.group({
      email : ['', Validators.compose([Validators.required, Validators.email])],
    });
    
  }

  forgetPassword() {
    if(this.resetForm.valid){
      this.authService.sendResetPassLinkService(this.resetForm.value).subscribe((result) =>{
         alert(result.message);
         
      }, error =>{
          alert(error.error.message);
          this.resetForm.reset();
      });
    }
  }

}
