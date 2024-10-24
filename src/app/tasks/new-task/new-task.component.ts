import { 
  Component,
  inject,
  computed,
  input,
  signal
} from '@angular/core';
import {
  Router,
  RouterLink
} from '@angular/router';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { TasksService } from '../tasks.service';
import { type User } from '../../utilities/tools/users';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  host: {
    '(document:keydown.escape)': `router.navigate(['/users', this.user()!.id])`
  },
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {

  private router = inject(Router);
  private fb = inject(FormBuilder);

  private tasksService = inject(TasksService);
  
  formErrorMessage = signal<string | null>(null);
  user = input.required<User>();
  submitted = signal<boolean>(false);

  form = this.fb.group({
    title: ['', Validators.required],
    summary: ['', Validators.required],
    date: ['', Validators.required]
  });

  title = computed<string>( () => this.form.controls.title.value ! );
  summary = computed<string>(() => this.form.controls.summary.value ! );
  date = computed<string>( () => this.form.controls.date.value ! );

  onSubmit(): void {

    if (this.form.invalid) {
      this.formErrorMessage.set('Please, fill all the required fields!');
      return;
    }
    
    this.tasksService.addTask(
      {
        title: this.title(),
        summary: this.summary(),
        date: this.date()
      },
      this.user()!.id
    );

    this.formErrorMessage.set(null);
    this.submitted.set(true);
    
    //* replace URL to true to prevent goin' back to the form after submitting the task.
    this.router.navigate(
      ['/users', this.user()!.id],
      { replaceUrl: true }
    );
  }

}