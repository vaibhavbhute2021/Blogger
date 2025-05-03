import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { ToastService } from '../../Services/toast.service';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export default class PricingComponent implements OnInit{

  
  authService = inject(AuthService);
  toastService = inject(ToastService);
  isLoggedIn : any;
  
  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    
  }


  
   

}
