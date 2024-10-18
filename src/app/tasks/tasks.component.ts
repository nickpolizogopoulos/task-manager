import { Component, computed, DestroyRef, HostListener, inject, input, output, signal } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';

import { type User } from '../utilities/users';
import { UsersService } from '../users/users.service';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksService } from './tasks.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    RouterModule,
    TaskComponent,
    NewTaskComponent,
  ],
  template: `
  
    <!-- @if (isAddingTask()) {
      <app-new-task (close)="onCloseAddTask()" [user]="user()" />
    } -->
    <section class="tasks">
        <header>
            <h2>{{ user()?.name }}'s Tasks</h2>
            <menu>
                <button class="close" (click)="onUserClose()">Close</button>
                <button (click)="onAddNewTask()">Add Task</button>
            </menu>
        </header>
        <hr>
        <ul>
            @for (task of selectedUserTasks; track task.id) {
                <li>
                    <app-task [task]="task" />
                    <router-outlet></router-outlet>
                </li>
            }
            @empty {
                <p class="empty">{{user()?.name}}'s list is empty.</p>
            }
        </ul>
    </section>
  
  `,
  styleUrl: './tasks.component.scss'
})
export class TasksComponent  {
  
  private tasksService = inject(TasksService);
  private router = inject(Router);

  private title = inject(Title);

  // user = input.required<User>();

  
  // closeTasks = output<void>();
  // isAddingTask = signal<boolean>(false);
  
  get selectedUserTasks() {
    return this.tasksService.getUserTasks( this.user()!.id );
  }
  
  onAddNewTask():void {
    // this.isAddingTask.set(true);

    // this.router.navigate(['/new-task']);
  }
  
  @HostListener('document:keydown.escape', ['$event']) 
  onCloseAddTask():void {
    // this.isAddingTask.set(false);
  }
  
  onUserClose():void {
    this.router.navigate(['/']);
    // this.title.setTitle('Easy Task Manager');
  }
  


  //* ======================================================================

  private usersService = inject(UsersService);
  private destroyRef = inject(DestroyRef);
  private activatedRoute = inject(ActivatedRoute);
  
  user = signal<User | undefined>(undefined);
  // userId = input.required<string>();

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


}
