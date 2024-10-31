import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExpenseService } from '../../core/services/expense.service';
import { ActivatedRoute } from '@angular/router';
import { Router, RouterModule } from '@angular/router';
import { IExpense } from '../../models/common.model';
import { tick } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { forbiddenNameValidator } from '../../core/validators/forbidden-name-directive';

@Component({
  selector: 'app-expense-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.css'
})
export class ExpenseFormComponent implements OnInit {
  expenseForm!: FormGroup;
  expenseId!: '';
  isLoggedIn = inject(AuthService).isLoggedIn();
  authorised!: boolean;
  authService = inject(AuthService);
  unauthorised: boolean = false;

  constructor(
    private fb: FormBuilder, 
    private afs: ExpenseService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.expenseForm = this.fb.group({
      price: new FormControl("", [Validators.required]),
      title: new FormControl("", [Validators.required]),
      description: new FormControl("", [forbiddenNameValidator(/craig/i)]),
    });
  }

  ngOnInit(): void {
    this.isLoggedIn.subscribe((data) =>{
      this.authorised = data;
    });
    this.activatedRoute.params.subscribe({
      next:(params) => 
        this.expenseId = params['id']
    });
    this.getExpense(this.expenseId)
  }

  getExpense(key: string){
      this.afs.getExpense(key).subscribe((data: any) => {
        this.expenseForm.patchValue(data);
      });
  }

  addExpense(){
    if (this.authorised){
      this.afs.addExpense(this.expenseForm.value);
      this.router.navigate(['./']);
    }
    else
    {
      this.unauthorised = true;
    }
  }

  updateExpense(){
    if (this.expenseForm.valid && this.authorised) {
    this.activatedRoute.params.subscribe({
      next:(params) =>
        params['id'] ? this.afs.updateExpense(params['id'], 
          this.expenseForm.value) : 
          this.afs.addExpense(this.expenseForm.value)
    });
      this.router.navigate(['./']);
    }
    else 
    {
      this.expenseForm.markAllAsTouched();
      this.expenseForm.hasError;
      this.unauthorised = true;
    }
  }

  // getAllExpenses(){
  //   this.expenseService
  //   .getAllExpenses()
  // }

  // onSubmit() {
  //   if (this.expenseForm.valid) {
  //     console.log(this.expenseForm.value)
  //   } else {
  //     this.expenseForm.markAllAsTouched();
  //   }
  // }
}
