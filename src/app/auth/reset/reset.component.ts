import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-reset',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './reset.component.html',
  styleUrl: './reset.component.scss'
})
export class ResetComponent {
  resetForm!: FormGroup;
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  @Output() formSubmit = new EventEmitter<void>();
  constructor() {
    this.resetForm = this.fb.group({
      emailAddress: ['', 
        [
          // Validators.maxLength(255),
          // Validators.required
        ]
      ]
    });
  }

  onSubmit() {
    this.authService.resetPassword(this.resetForm.value.emailAddress);
    this.formSubmit.emit();
  }
}
