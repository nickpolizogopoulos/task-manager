import { Component, inject, Input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { type NewTaskData } from '../../utilities/tasks';
import { TasksService } from '../tasks.service';
import { User } from '../../utilities/users';
import { required } from '../../utilities/general';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {

  @Input(required) user!:User;

  private tasksService = inject(TasksService);

  close = output<void>();

  title:string = '';
  summary:string = '';
  date:string = '';

  formErrorMessage:null | string = null;

  onSubmit() {

    //* Form Validation apo LIDL only 9.99 kalhmera.
    const title = this.title.trim() === '';
    const summary = this.summary.trim() === '';
    const date = this.date === '';
    if (title || summary || date ) {
      this.formErrorMessage = 'Please, fill all the required fields!';
      return
    }
    //* Form Validation apo LIDL only 9.99 kalhnyxta.

    
    this.formErrorMessage = null;

    this.tasksService.addTask(
      {
        title: this.title,
        summary: this.summary,
        date: this.date
      },
      this.user.id
    );

    this.onClose();
  }

  onClose():void {
    this.close.emit();
    this.formErrorMessage = null;
  }

}
