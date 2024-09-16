import { Component, HostListener, inject, input, output, signal } from '@angular/core';

import { type User } from '../utilities/users';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    NewTaskComponent,
  ],
  template: `
  
  @if (isAddingTask()) {
    <app-new-task (close)="onCloseAddTask()" [user]="user()" />
  }
  <section class="tasks">
      <header>
          <h2>{{ user().name }}'s Tasks</h2>
          <menu>
              <button class="close" (click)="onClose()">Close</button>
              <button (click)="onAddNewTask()">Add Task</button>
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
              <p class="empty">{{user().name}}'s list is empty.</p>
          }
      </ul>
  </section>
  
  `,
  styleUrl: './tasks.component.scss'
})
export class TasksComponent  {
  
  private tasksService = inject(TasksService);

  user = input.required<User>();
  closeTasks = output<void>();
  isAddingTask = signal<boolean>(false);

  get selectedUserTasks() {
    return this.tasksService.getUserTasks( this.user().id );
  }

  onAddNewTask():void {
    this.isAddingTask.set(true);
  }
  
  @HostListener('document:keydown.escape', ['$event']) 
  onCloseAddTask():void {
    this.isAddingTask.set(false);
  }

  onClose():void {
    this.closeTasks.emit();
  }

}
