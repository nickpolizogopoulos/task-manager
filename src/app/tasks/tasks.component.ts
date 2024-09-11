import { Component, HostListener, inject, input, Input, OnInit, output } from '@angular/core';

import { type User } from '../utilities/users';
import { TaskComponent } from "./task/task.component";
import { NewTaskData, type Task } from '../utilities/tasks';
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksService } from './tasks.service';
import { required } from '../utilities/general';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    NewTaskComponent,
],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent  {
  
  @Input(required) user!:User;

  closeTasks = output<void>();

  private tasksService = inject(TasksService);

  isAddingTask:boolean = false;
  
  tasks:Task[] = [];

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.user.id);
  }

  onAddNewTask():void {
    this.isAddingTask = true;
  }

  onClose():void {
    this.closeTasks.emit();
  }
  
  @HostListener('document:keydown.escape', ['$event']) 
  onCloseAddTask():void {
    this.isAddingTask = false;
  }

}
