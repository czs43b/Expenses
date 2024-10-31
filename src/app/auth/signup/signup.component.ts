import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgIf } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm!: FormGroup;
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  @Output() formSubmit = new EventEmitter<void>();
  constructor() {
    this.signupForm = this.fb.group({
      emailAddress: ['', 
        [
          // Validators.maxLength(255),
          // Validators.required
        ]
      ],
      password: ['', 
        [
          // Validators.minLength(8),
          // Validators.maxLength(16),
          // Validators.required
        ]
      ],
      confirmPassword: ['', 
        [
          // Validators.minLength(8),
          // Validators.maxLength(16),
          // Validators.required
        ]
      ]
    });
  }

  onSubmit() {
    this.authService.signupUserWithEmail(this.signupForm.value.emailAddress, this.signupForm.value.password);
    this.formSubmit.emit();
  }
}
