import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { IExpense } from '../../models/common.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  constructor(private afs: AngularFirestore, private toastr: ToastrService) {
  }

  getAllExpenses() {
    return this.afs.collection('expenses').snapshotChanges().pipe(
      map((changes) => {
        return changes.map(action => {
          const data = action.payload.doc.data() as IExpense;
          const id = action.payload.doc.id;
          data.key = id;
          //return { id, ...data };
          return { ...data };
        });
      })
    );
  }

  getExpense(key: string){
    let res = this.afs.collection('expenses').doc(key).valueChanges();
    return res;
  }

  addExpense(expense: IExpense){
    this.afs.collection('expenses').add(expense).catch((result) =>{
      this.toastr.error(result, 'An error occurred',
        {
          timeOut: 10000,
          positionClass: 'toast-top-right',
          closeButton: true,
          progressBar: true,
        }
      );
    });
  }

  updateExpense(key: string, expense: IExpense){
    this.afs.collection('expenses').doc(key).update(expense);
  }

  deleteExpense(key: string){
    this.afs.doc('expenses/' + key).delete();
  }
}
