import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './core/services/auth.service';
import { SafeHtmlPipe } from './pipes/safe-html-pipe';
import { User } from 'firebase/auth';
import { UserModel } from './models/user';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SafeHtmlPipe, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'expenses';
  auth = inject(AuthService);
  isLoginFormModelOpen = false;
  isLoggedIn = inject(AuthService).isLoggedIn();
  user!: string;
  constructor(private toastr: ToastrService) {
    
  }

  logOut() {
    this.auth.logout().then(() => {
      this.toastr.warning('Logged out', 'User logged out successfully', 
        {
          timeOut: 5000,
          positionClass: 'toast-top-right',
          closeButton: true,
          progressBar: true,
        }
      );
    });
  }

  ngOnInit(): void {
    this.isLoggedIn.subscribe((result) => {
      if (result) {
        let usr = localStorage.getItem('user');
        if (usr) {
          let parsedUsr = JSON.parse(usr);
          this.user = parsedUsr.email;
          this.toastr.success(this.user, 'User logged in successfully', 
            {
              timeOut: 5000,
              positionClass: 'toast-top-right',
              closeButton: true,
              progressBar: true,
            }
          );
        }
      }
    });
  }
}
