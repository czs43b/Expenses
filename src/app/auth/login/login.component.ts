import { Component, inject, Output, EventEmitter } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgIf } from '@angular/common';
import { Firestore, collection, doc, setDoc } from '@angular/fire/firestore';
import { validatePassword } from 'firebase/auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm!: FormGroup;
  fb = inject(FormBuilder);
  //firestore = inject(Firestore);
  @Output() formSubmit = new EventEmitter<void>();
  authService = inject(AuthService);
  constructor(private router: Router) {
    this.loginForm = this.fb.group({
      emailAddress: ['', 
        [
          Validators.minLength(2),
          Validators.maxLength(255),
          Validators.required]
        ],
      password: ['', 
        [
          Validators.minLength(8),
          Validators.maxLength(16),
          Validators.required]
        ]
    });
  }

  async onSubmit() {
    await this.authService.login(this.loginForm.value.emailAddress, this.loginForm.value.password).then(() => {
      this.router.navigate(['./']);
    });    
   
    this.formSubmit.emit();
  }

  logOut() {
    this.authService.logout();
  }
}