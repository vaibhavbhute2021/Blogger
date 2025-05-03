import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { error } from 'node:console';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LogoutConfirmationComponent } from '../logout-confirmation/logout-confirmation.component';
import { subscribe } from 'node:diagnostics_channel';
import { ToastService } from '../../Services/toast.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule, MatDialogModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{


  isSidebarOpen = false; // Controls sidebar visibility
  isLoggedIn : boolean = false;
  authService = inject(AuthService);
  router = inject(Router);
  dialog = inject(MatDialog);
  toastService = inject(ToastService);

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe(result =>{
      this.isLoggedIn = this.authService.isLoggedIn();
      console.log("Before",this.isLoggedIn);
     }, error =>{
      this.toastService.show(error.error.message, {type: 'error', autohide: true, showClose: true});
     });
  }

  logout() {
    const dialogRef = this.dialog.open(LogoutConfirmationComponent);
    dialogRef.afterClosed().subscribe((result) =>{
      if(result){
        localStorage.removeItem('user');
        localStorage.removeItem('access_token');
        this.authService.isLoggedIn$.next(false);
        this.router.navigate(['/login']);
        this.toastService.show("Log off Successfull.", {type: 'success', autohide: true, showClose: true});
      }
    })
}
 
  

}
