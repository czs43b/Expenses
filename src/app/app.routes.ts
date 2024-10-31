import { Routes } from '@angular/router';
import { ExpenseComponent } from './pages/expense/expense.component';
import { ExpenseFormComponent } from './pages/expense-form/expense-form.component';

export const routes: Routes = [
    { 
        path: '', component: ExpenseComponent 
    },
    { 
        path: 'expense-form', component: ExpenseFormComponent 
    },
    { 
        path: 'expense-form/:id', component: ExpenseFormComponent 
    }, 
    {
      path: 'login',
      loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent)
    }, 
    {
      path: 'signup',
      loadComponent: () => import('./auth/signup/signup.component').then(m => m.SignupComponent)
    }, 
    {
      path: 'reset',
      loadComponent: () => import('./auth/reset/reset.component').then(m => m.ResetComponent)
    }
];
