import { Component, inject, input, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { type Task } from '../../utilities/tasks';
import { TasksService } from '../tasks.service';
import { required } from '../../utilities/general';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {

  @Input(required) task!:Task;

  private tasksService = inject(TasksService);

  onComplete():void {
    this.tasksService.removeTask(this.task.id)
  }
  
}
