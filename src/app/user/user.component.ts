import { Component, input, output } from '@angular/core';

import { type User } from '../utilities/users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  template: `
  
    <section class="user-box">
      <div [class.active]="isSelected()" class="user" (click)="onSelectUser()">
          <img [src]="imagePath" [alt]="imageAlt">
          <span>{{ user().name }}</span>
      </div>
    </section>
  
  `,
  styleUrl: './user.component.scss'
})
export class UserComponent {

  user = input.required<User>();
  isSelected = input.required<boolean>();

  select = output<string>();

  get imagePath():string {
    return 'users/' + this.user().avatar;
  }

  get imageAlt():string {
    return this.user().name + ' avatar';
  }

  onSelectUser() {
    this.select.emit( this.user().id );
  }
}
