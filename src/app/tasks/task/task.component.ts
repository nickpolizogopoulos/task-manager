import { 
  Component,
  inject,
  input
} from '@angular/core';
import { DatePipe } from '@angular/common';
// import { Router } from '@angular/router';

import { TasksService } from '../tasks.service';
import { taskIdSubstring, type Task } from '../../utilities/tools/tasks';
import { SubstringPipe } from '../../utilities/pipes/substring.pipe';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    DatePipe,
    SubstringPipe
  ],
  template: `
  
    <article>
      <h3>{{ task().title }}</h3>
      <time>
        Due date<span>:</span> 
        {{ task().dueDate | date: 'dd MMM yyy' }} - 
        id<span>:</span> 
        {{ task().id | substring:0:taskIdSubstring }}
      </time>
      <p class="summary">{{ task().summary }}</p>
      <div class="actions">
          <!-- <button (click)="onEditTask( task() )">Edit task</button> -->
          <button (click)="onComplete()">Complete</button>
      </div>
    </article>
  
  `,
  styleUrl: './task.component.scss'
})
export class TaskComponent {

  private tasksService = inject(TasksService);
  // private router = inject(Router);

  task = input.required<Task>();

  taskIdSubstring: number = taskIdSubstring;

  onComplete(): void {
    this.tasksService.removeTask( this.task().id );
  }

  onEditTask( task: Task ): void {

    console.log( task.id.substring(0, this.taskIdSubstring) );
    
  }
  
}
