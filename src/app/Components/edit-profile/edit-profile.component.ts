import { CommonModule } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import ProfileComponent from '../profile/profile.component';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [CommonModule, MatDialogModule, ReactiveFormsModule, MatFormFieldModule],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export default class EditProfileComponent {

  editProfileForm !: FormGroup;
  // profileImage: File | null = null;
  private fb = inject(FormBuilder);

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<ProfileComponent> ) {
    this.editProfileForm = this.fb.group({
      firstName: [data.firstName],
      lastName: [data.lastName],
      username: [data.userName],
      bio: [data.bio]
    });
  }

  // onFileSelected(event: Event): void {
  //   const file = (event.target as HTMLInputElement).files?.[0];
  //   if (file) {
  //     this.profileImage = file;
  //   }
  // }

  save(): void {
    const updatedData = {
      ...this.editProfileForm.value
    };
    this.dialogRef.close(updatedData);
    
  }

}


