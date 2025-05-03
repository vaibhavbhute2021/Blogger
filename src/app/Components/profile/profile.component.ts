import { CommonModule } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import EditProfileComponent from '../edit-profile/edit-profile.component';
import { last } from 'rxjs';
import { AuthService } from '../../Services/auth.service';
import { error } from 'console';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export default class ProfileComponent {

  dialog = inject(MatDialog);
  Storeduser : any = localStorage.getItem('user') 
  user = JSON.parse(this.Storeduser);
  authService = inject(AuthService);

  editProfile():void {
    const dialogRef = this.dialog.open(EditProfileComponent, {
      width: '400px',
      data: {
        firstName : this.user.firstName,
        lastName : this.user.lastName,
        userName : this.user.userName,
        bio : this.user.bio
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        
        this.user.firstName = result.firstName;
        this.user.lastName = result.lastName;
        this.user.userName = result.username;
        this.user.bio = result.bio;

        const updatedUserDetails = {
          ...this.user
        }

        console.log(updatedUserDetails);
        this.authService.editprofile(this.user._id, updatedUserDetails).subscribe( 
          (result) =>{
          alert(result.message);
        }, (error) =>{
          alert(error.message);
        })

        // Handle profile image update if needed
      }
    });
  }
  }

 


