import { Component, inject, OnInit } from '@angular/core';
import { ToastService } from '../../Services/toast.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export default class FeaturesComponent{
  

  toastService = inject(ToastService);

  // ngOnInit(): void {
  //  this.toastService.show('Features Page Opened', { type: 'success', autohide: true, showClose: true });
  // }

}
