import { 
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  OnInit,
  signal
} from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink
} from '@angular/router';
import { Title } from '@angular/platform-browser';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { UsersService } from '../../users/users.service';
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
    '(document:keydown.escape)': 'onCloseAddTaskPanel()'
  },
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent implements OnInit {

  // private pageTitle = inject(Title);
  private router = inject(Router);
  // private activatedRoute = inject(ActivatedRoute);
  // private destroyRef = inject(DestroyRef);
  private fb = inject(FormBuilder);

  private tasksService = inject(TasksService);
  private usersService = inject(UsersService);
  
  formErrorMessage = signal<string | null>(null);

  // user = signal<User | undefined>(undefined);

  user = input.required<User>();
  pageTitle = input.required<string>();

  ngOnInit(): void {

    // const subscription = this.activatedRoute.paramMap.subscribe({
    //   next: paramMap => {
        
    //     const user = this.usersService.users
    //       .find( user => user.id === paramMap.get('userId'));

    //     if (user) {
    //       this.user.set(user);
    //       this.pageTitle.setTitle(this.user()?.name + ' - New task');
    //     }
          
    //     else
    //       this.router.navigate(['/']);
    //   }
    // });
    
    // this.destroyRef.onDestroy( () => subscription.unsubscribe() );
  }

  private backToTasks(): void {
    this.router.navigate(['/users', this.user()!.id]);
  }

  form = this.fb.group({
    title: ['', Validators.required],
    summary: ['', Validators.required],
    date: ['', Validators.required]
  });

  private title = computed<string>( () => this.form.controls.title.value ! );
  private summary = computed<string>(() => this.form.controls.summary.value ! );
  private date = computed<string>( () => this.form.controls.date.value ! );

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
    
    //* replace URL to true to prevent goin' back to the form after submitting the task.
    this.router.navigate(
      ['/users', this.user()!.id],
      { replaceUrl: true }
    );
  }

  onCloseAddTaskPanel(): void {

    if (this.title() || this.summary() || this.date()) {
    const confirmation = confirm('Do you really want to close the form? All your information will be lost!');

      if (!confirmation)
        return;
    }

    this.backToTasks();
  }
}