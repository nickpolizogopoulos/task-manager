import { Component, inject, input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { type Task } from '../../utilities/tasks';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    DatePipe
  ],
  template: `
  
    <article>
      <h3>{{ task().title }}</h3>
      <time>{{ task().dueDate | date: 'dd MMM yyy' }}</time>
      <p class="summary">{{ task().summary }}</p>
      <div class="actions">
          <button (click)="onComplete()">Complete</button>
      </div>
    </article>
  
  `,
  styleUrl: './task.component.scss'
})
export class TaskComponent {

  private tasksService = inject(TasksService);

  task = input.required<Task>();

  onComplete():void {
    this.tasksService.removeTask( this.task().id );
  }
  
}
