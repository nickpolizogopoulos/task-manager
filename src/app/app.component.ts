import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { User, dummy_users } from './utilities/users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:
  [
    // RouterOutlet
    HeaderComponent,
    UserComponent,
    TasksComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  users:User[] = dummy_users;

  selectedUser!:User;

  onSelectUser( id:string ) {
    this.selectedUser = this.users.find( user => user.id === id )!;
  }
}
