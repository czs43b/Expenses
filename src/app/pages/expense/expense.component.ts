import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IExpense } from '../../models/common.model';
import { ExpenseService } from '../../core/services/expense.service';
import { Observable } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { ModalComponent } from '../../components/modal/modal.component';
import { LoginComponent } from '../../auth/login/login.component';
import { SafeHtmlPipe } from "../../pipes/safe-html-pipe";

@Component({
  selector: 'app-expense',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NgFor,
    AsyncPipe,
    ModalComponent,
    LoginComponent,
    SafeHtmlPipe
],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.css'
})

export class ExpenseComponent implements OnInit, OnDestroy {
  items: Observable<IExpense[]>;
  totalPrice: number = 0;
  isLoggedIn = inject(AuthService).isLoggedIn();
  authorised!: boolean;
  authService = inject(AuthService);
  unauthorised: boolean = false;
  isLoginFormModelOpen = false;

  constructor(private expenseService: ExpenseService, private router: Router) {
    this.items = this.getAllDocuments();
    this.isLoggedIn.subscribe((data) =>{
      this.authorised = data;
    });
    this.items.subscribe((data) =>{
      this.totalPrice = 0;
      data.forEach(element => {
        this.totalPrice += Number(element.price);
      });
    });
  }

  getAllDocuments(){
    return this.expenseService.getAllExpenses();
  }

  editExpense(key: string){
    this.router.navigate(['/expense-form/' + key]);
  }

  deleteExpense(key: string){
    if (this.authorised) {
      this.expenseService.deleteExpense(key);
    }    
    else {
      this.unauthorised = true;
    }
  }

  addExpense(){
    if (this.authorised) {
      this.router.navigate(['/expense-form']);
    }  
    else {
      this.unauthorised = true;
    }  
  }

  ngOnInit(): void {
    // this.items.subscribe((data) => {
    //   console.log(data);
    // });
  }

  ngOnDestroy(): void {
  }
}
