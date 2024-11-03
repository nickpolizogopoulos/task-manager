import {
  Component,
  DestroyRef,
  inject,
  OnInit,
  signal,
  computed,
  input
} from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink
} from '@angular/router';

import { TasksService } from './tasks.service';
import { type User } from '../utilities/tools/users';
import { 
  TaskListOrderOptions,
  type Task
} from '../utilities/tools/tasks';
import { TaskComponent } from "./task/task.component";
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    RouterLink,
    TaskComponent
  ],
  host: {
    '(document:keydown.escape)': 'onUserClose()'
  },
  template: `

    <section class="tasks">
        <header>
            <h2>{{ user().name }}'s Tasks</h2>
            <menu>
                <button class="close" (click)="onUserClose()">Close</button>
                <button routerLink="new-task">Add Task</button>
            </menu>
        </header>
        
        <hr>

        @if ( userTasks().length > 1 ) {
          <section>
            
            Short by date<span>: </span>
            <svg [class.short-arrow-rotate]="shorted()" class="short-arrow" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
            </svg>
            
            <a 
              routerLink="./"
              [queryParams]="{ 'tasksorder': shorted() ? 'decending' : 'ascending' }"
              (click)="onSortTasksClick()"
            >
              {{ shorted() ? 'Descending' : 'Ascending' }}
            </a>
            
          </section>
        }

        <ul>
            @for (task of userTasks(); track task.id) {
                <li>
                    <app-task [task]="task" />
                </li>
            }
            @empty {
                <p class="list-empty">
                  {{ user().name }}'s list is empty.
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

  user = input.required<User>();
  shorted = signal<boolean>(false);

  private tasksService = inject(TasksService);
  private order = signal<TaskListOrderOptions>( this.shorted() ? 'descending' : 'ascending' );

  userTasks = computed<Task[]>( () =>
    this.tasksService
      .getTasks()
      .filter( task => task.userId === this.user()?.id )
      .sort( (a, b) => {
        if (this.order() === 'ascending')
          return a.dueDate < b.dueDate ? -1 : 1
        else 
          return a.dueDate < b.dueDate ? 1 : -1
      })
  );

  ngOnInit(): void {
    this.activatedRoute.queryParams
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: params => this.order.set(params['tasksorder'])
      });
  }

  onSortTasksClick(): void {
    this.shorted.update( value => !value );  
  }

  onUserClose(): void {
    this.router.navigate(['/']);
  }
}
