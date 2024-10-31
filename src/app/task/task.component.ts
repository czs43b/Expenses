import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { Task } from '../models/task';
import { Observable } from 'rxjs';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task: Task | null = null;
  @Output() edit = new EventEmitter<Task>();
  isLoggedIn!: Observable<boolean>;
  authService = inject(AuthService);
}