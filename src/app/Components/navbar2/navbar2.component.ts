import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ToastService } from '../../Services/toast.service';
import { LogoutConfirmationComponent } from '../logout-confirmation/logout-confirmation.component';
import { Router, RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-navbar2',
  standalone: true,
  imports: [CommonModule, RouterModule, MatDialogModule, MatIconModule],
  templateUrl: './navbar2.component.html',
  styleUrl: './navbar2.component.css'
})
export class Navbar2Component implements OnInit{


  @ViewChild('navbar')
  navbar!: ElementRef;
  
    isSidebarOpen = false; // Controls sidebar visibility
    isLoggedIn : boolean = false;
    authService = inject(AuthService);
    router = inject(Router);
    dialog = inject(MatDialog);
    toastService = inject(ToastService);


  
    ngOnInit(): void {
      this.authService.isLoggedIn$.subscribe(result =>{
        this.isLoggedIn = this.authService.isLoggedIn();
       }, error =>{
        this.toastService.show(error.error.message, {type: 'error', autohide: true, showClose: true});
       });
    }
  
    logout() {
      const dialogRef = this.dialog.open(LogoutConfirmationComponent);
      dialogRef.afterClosed().subscribe((result) =>{
        if(result){
          localStorage.removeItem('user');
          localStorage.removeItem('token');
          localStorage.removeItem('loglevel');
          this.authService.isLoggedIn$.next(false);
          this.router.navigate(['/login']);
          this.toastService.show("Log off Successfull.", {type: 'success', autohide: true, showClose: true});
        }
      })
    }

   

}
