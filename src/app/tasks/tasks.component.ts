import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { type User } from '../utilities/users';
import { UsersService } from '../users/users.service';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    RouterModule,
    TaskComponent,
    NewTaskComponent,
  ],
  host: {
    '(document:keydown.escape)': 'onUserClose()'
  },
  template: `

    <section class="tasks">
        <header>
            <h2>{{ user()?.name }}'s Tasks</h2>
            <menu>
                <button class="close" (click)="onUserClose()">Close</button>
                <button routerLink="new-task">Add Task</button>
            </menu>
        </header>
        <hr>
        <ul>
            @for (task of selectedUserTasks; track task.id) {
                <li>
                    <app-task [task]="task" />
                </li>
            }
            @empty {
                <p class="empty">
                  {{user()?.name}}'s list is empty.
                </p>
            }
        </ul>
    </section>
  
  `,
  styleUrl: './tasks.component.scss'
})
export class TasksComponent implements OnInit  {
  
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);
  private title = inject(Title);

  private usersService = inject(UsersService);
  private tasksService = inject(TasksService);

  get selectedUserTasks() {
    return this.tasksService.getUserTasks( this.user()!.id );
  }
  
  user = signal<User | undefined>(undefined);

  ngOnInit(): void {   
    
    const subscription = this.activatedRoute.paramMap.subscribe({
      next: paramMap => {
        
        const user = this.usersService.users
          .find( user => user.id === paramMap.get('userId'));
        
        if (user) {
          this.user.set(user);
          this.title.setTitle('Tasks' + ' - ' + this.user()?.name);
        }
          
        else
          this.router.navigate(['/']);
    
      }
    });
    
    this.destroyRef.onDestroy( () => subscription.unsubscribe() );
  }

  onUserClose(): void {
    this.router.navigate(['/']);
  }

}
