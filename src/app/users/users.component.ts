import { Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

import { type User } from '../utilities/users';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    RouterModule
  ],
  template: `
  
    <ul>
      @for (user of users(); track user.id) {
        <li class="user-box">
          <a [routerLink]="['/users', user.id]" routerLinkActive="active" class="user">
            <img [src]="['/users/' + user.avatar]" [alt]="[user.name + ' avatar']">
            <span>{{ user.name }}</span>
          </a>
        </li>
      }
    </ul>
      
  `,
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  private usersService = inject(UsersService);

  users = signal<User[]>(this.usersService.users);

}
