import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TasksService } from '../tasks.service';
import { User } from '../../utilities/users';

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

  private tasksService = inject(TasksService);

  user = input.required<User>();
  close = output<void>();

  title = signal<string>('');
  summary = signal<string>('');
  date = signal<string>('');

  formErrorMessage = signal<string | null>(null);

  onSubmit() {

    const title = this.title().trim() === '';
    const summary = this.summary().trim() === '';
    const date = this.date() === '';
    
    if (title || summary || date ) {
      this.formErrorMessage.update( () => 'Please, fill all the required fields!' );
      return;
    }
    
    this.formErrorMessage.set(null);
    
    this.tasksService.addTask(
      {
        title: this.title(),
        summary: this.summary(),
        date: this.date()
      },
      this.user().id
    );
    
    this.onCloseAddTaskPanel();
  }
  
  onCloseAddTaskPanel():void {
    this.close.emit();
    this.formErrorMessage.set(null);
  }

}
