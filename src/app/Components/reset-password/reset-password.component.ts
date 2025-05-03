import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { passwordValidator } from '../Validators/password_pattern.validator';
import { confirmPasswordValidator } from '../Validators/confirm_password.validator';
import { ToastService } from '../../Services/toast.service';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export default class ResetPasswordComponent implements OnInit{


resetPassForm !: FormGroup;
fb = inject(FormBuilder);
router = inject(Router);
authService = inject(AuthService);
activatedRoute = inject(ActivatedRoute);
token : any = '';
toastService = inject(ToastService);

ngOnInit(): void {
     this.token = this.activatedRoute.snapshot.paramMap.get('token');
    //console.log(token)
    this.resetPassForm = this.fb.group({
      password : ['', [Validators.required, passwordValidator()]],
      confirmpassword : ['',Validators.required]
    },
    {
      validator : confirmPasswordValidator('password', 'confirmpassword')
     }
  )
}


updatePassword() {
const resetPassObj = {
  token : this.token,
  password : this.resetPassForm.value.password
}

this.authService.resetPasswordService(resetPassObj).subscribe((result) =>{
    
  alert(result.message);
  this.resetPassForm.reset();
  this.toastService.show(result.message, {type: 'success', autohide: true, showClose: true});
  this.router.navigate(['/login'])

}, error =>{
  this.toastService.show(error.error.message, {type: 'error', autohide: true, showClose: true});
})
  
}

clearForm() {
  this.resetPassForm.reset();
  }

}
