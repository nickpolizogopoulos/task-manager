import {
  Component,
  DestroyRef,
  inject,
  OnInit,
  signal,
  computed
} from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink
} from '@angular/router';
import { Title } from '@angular/platform-browser';

import { UsersService } from '../users/users.service';
import { TasksService } from './tasks.service';
import { type User } from '../utilities/users';
import { type Task } from '../utilities/tasks';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    RouterLink,
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
            @for (task of userTasks(); track task.id) {
                <li>
                    <app-task [task]="task" />
                </li>
            }
            @empty {
                <p class="empty">
                  {{ user()?.name }}'s list is empty.
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

  userTasks = computed<Task[]>( () =>
    this.tasksService.getTasks().filter(
      task => task.userId === this.user()?.id
    )
  );
  
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
          this.router.navigate(['/404']);
    
      }
    });
    
    this.destroyRef.onDestroy( () => subscription.unsubscribe() );
  }

  onUserClose(): void {
    this.router.navigate(['/']);
  }

}
