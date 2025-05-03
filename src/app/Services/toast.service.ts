import { Injectable , TemplateRef} from '@angular/core';


export interface Toast {
	template: TemplateRef<any>;
	classname?: string;
	delay?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {

	toasts: any[] = [];

	
  // Show a new toast
  show(message: string, options: any = {}): void {
    this.toasts.push({ message, ...options });
  }

  // Remove a toast
  remove(toast: any): void {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }

  // Clear all toasts
  clear(): void {
    this.toasts = [];
  }

  
}
