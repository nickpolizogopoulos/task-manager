import { Component, Input } from '@angular/core';
import { type Task } from '../../utilities/tasks';
import { required } from '../../utilities/general';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {

  @Input(required) task!:Task;
  
}
