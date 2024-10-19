import { Component, computed, DestroyRef, HostListener, inject, input, OnInit, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TasksService } from '../tasks.service';
import { User } from '../../utilities/users';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../users/users.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent implements OnInit{

  private title = inject(Title);
  private tasksService = inject(TasksService);
  private usersService = inject(UsersService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);
  private backToTasks = computed( () =>
    this.router.navigate(['/users/' + this.user()!.id])
  );
  
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

  onSubmit() {

    const title = this.taskTitle().trim() === '';
    const summary = this.summary().trim() === '';
    const date = this.date() === '';
    
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

  @HostListener('document:keydown.escape', ['$event'])
  onCloseAddTaskPanel(): void {
    
    if (this.taskTitle() || this.summary() || this.date()) {
      const confirmation = confirm('Do you really want to close the form? All your information will be lost!');

      if (!confirmation)
        return;
    }

    this.backToTasks();
  }


}
