import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserModel } from '../../models/user';
import firebase from 'firebase/compat/app';
import { map } from 'rxjs';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<any>;
  
  constructor(private auth: AngularFireAuth, private router: Router) { 
    this.user$ = auth.authState;
  }

  async login(email: string, password: string) {
    await this.auth.signInWithEmailAndPassword(email, password).then(user => {
      const currentTimestamp = Date.now();

      // Add 30 minutes (30 minutes * 60 seconds * 1000 milliseconds)
      const newTimestamp = currentTimestamp + 30 * 60 * 1000;

      // Convert to seconds (Unix timestamp)
      const unixTimestampInSeconds = Math.floor(newTimestamp / 1000);

      const userObject = {
        email: user.user!.email,
        uid: user.user!.uid,
        lastLogin: currentTimestamp,
        expires: unixTimestampInSeconds,
      };

      //console.log(unixTimestampInSeconds);

      //new Date(1729614382800).toLocaleString('en-GB');

      localStorage.setItem('user', JSON.stringify(userObject));
    }).catch((error) => {
      console.log(error);
    });
  }

  signupUserWithEmail(email: string, password: string) {
    this.auth.createUserWithEmailAndPassword(email, password);
  }

  resetPassword(email: string) {
    this.auth.sendPasswordResetEmail(email);
  }

  isLoggedIn(): Observable<boolean> {
    return this.auth.authState.pipe(
      map(user => !!user)
    );
  }

  logout() {
    return this.auth.signOut();
  }

  // persistUserLogin(user: object) {
    
    
  //   localStorage.setItem('user', JSON.stringify(userObject));
  //   //const test = JSON.parse(localStorage.getItem('user')!) as User;
  //   //console.log(test);
  // }
}
