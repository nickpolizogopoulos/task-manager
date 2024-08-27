import { Component, input, Input } from '@angular/core';

import { User } from '../utilities/users';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {

  @Input({required: true}) user!:User;

  // user = input.required<User>();

}
