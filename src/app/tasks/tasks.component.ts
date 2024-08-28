import { Component, input, Input } from '@angular/core';

import { type User } from '../utilities/users';
import { TaskComponent } from "./task/task.component";
import { required } from '../utilities/general';
import { dummy_tasks, type Task } from '../utilities/tasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {

  @Input(required) user!:User;

  get selectedUserTasks() {
    return this.tasks.filter( task => task.userId === this.user.id );
  }

  tasks:Task[] = dummy_tasks;

}
