import { Component, computed, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TasksService } from '../tasks.service';
import { User } from '../../utilities/users';
import { UsersService } from '../../users/users.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  host: {
    '(document:keydown.escape)': 'onCloseAddTaskPanel()'
  },
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent implements OnInit {

  private title = inject(Title);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);

  private tasksService = inject(TasksService);
  private usersService = inject(UsersService);
  
  taskTitle = signal<string>('');
  summary = signal<string>('');
  date = signal<string>('');
  formErrorMessage = signal<string | null>(null);

  user = signal<User | undefined>(undefined);

  ngOnInit(): void {

    const subscription = this.activatedRoute.paramMap.subscribe({
      next: paramMap => {
        
        const user = this.usersService.users
          .find( user => user.id === paramMap.get('userId'));

        if (user) {
          this.user.set(user);
          this.title.setTitle(this.user()?.name + ' - New task');
        }
          
        else
          this.router.navigate(['/']);
      }
    });
    
    this.destroyRef.onDestroy( () => subscription.unsubscribe() );
  }

  private backToTasks(): void {
    this.router.navigate(['/users/' + this.user()!.id]);
  }

  onSubmit(): void {

    const title: boolean = this.taskTitle().trim() === '';
    const summary: boolean = this.summary().trim() === '';
    const date: boolean = this.date() === '';
    
    if (title || summary || date ) {
      this.formErrorMessage.set('Please, fill all the required fields!');
      return;
    }
    
    this.formErrorMessage.set(null);
    
    this.tasksService.addTask(
      {
        title: this.taskTitle(),
        summary: this.summary(),
        date: this.date()
      },
      this.user()!.id
    );

    this.backToTasks();
  }

  onCloseAddTaskPanel(): void {
    
    if (this.taskTitle() || this.summary() || this.date()) {
      const confirmation = confirm('Do you really want to close the form? All your information will be lost!');

      if (!confirmation)
        return;
    }

    this.backToTasks();
  }
}