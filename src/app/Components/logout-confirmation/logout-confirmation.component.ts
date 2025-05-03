import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {MatDialogRef , MatDialogModule} from '@angular/material/dialog';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-logout-confirmation',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './logout-confirmation.component.html',
  styleUrl: './logout-confirmation.component.css'
})
export class LogoutConfirmationComponent{


    authService = inject(AuthService);
    private dialogRef = inject(MatDialogRef<LogoutConfirmationComponent>);

    noClicked() {
      this.dialogRef.close(false);
      }

      okClicked() {
        this.dialogRef.close(true);
      }
  }


