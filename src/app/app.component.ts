import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { User, dummy_users } from './utilities/users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:
  [
    // RouterOutlet
    HeaderComponent,
    UserComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  users:User[] = dummy_users;
  
  onSelectUser( id:string ) {
    console.log(`user with id "${id}" selected`);
  }
}
