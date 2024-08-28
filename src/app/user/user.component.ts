import { Component, Input, computed, EventEmitter, input, output, Output } from '@angular/core';

import { type User } from '../utilities/users';
import { required } from '../utilities/general';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  @Input(required) user!:User;
  @Input(required) isSelected!:boolean;

  select = output<string>();

  get imagePath():string {
    return 'users/' + this.user.avatar;
  }

  get imageAlt():string {
    return this.user.name + ' avatar';
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }

  //* Signal inputs
  // name = input.required<string>();
  // avatar = input.required<string>();

  // imagePath = computed<string>( () => 'users/' + this.avatar() );
  // imageAlt = computed<string>( () => this.name() + ' avatar' );

  
}
