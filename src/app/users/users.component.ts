import { Component, computed, inject, input, output, signal, ViewEncapsulation } from '@angular/core';

import { type User } from '../utilities/users';
import { RouterModule } from '@angular/router';
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

  // user = input.required<User>();

  private usersService = inject(UsersService);
  
  users = signal<User[]>(this.usersService.users);


  // isSelected = input.required<boolean>();

  // select = output<string>();


  // avatarPath = computed<string>(
  //   () => 'users/' + this.user().avatar!
  // );

  // avatarAlt = computed<string>(
  //   () => 'users/' + this.user().name + ' avatar'
  // );

}
