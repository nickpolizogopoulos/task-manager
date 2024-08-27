import { Component, computed, EventEmitter, input, output, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  
  @Input({required: true}) name!:string;
  @Input({required: true}) id!:string;
  @Input({required: true}) avatar!:string;

  //* old output mechanism
  // @Output() select = new EventEmitter<string>();

  //* new output syntax
  select = output<string>();

  get imagePath():string {
    return 'users/' + this.avatar;
  }

  get imageAlt():string {
    return this.name + ' avatar';
  }

  onSelectUser() {
    this.select.emit(this.id);
  }

  //* Signal inputs
  // name = input.required<string>();
  // avatar = input.required<string>();

  // imagePath = computed<string>( () => 'users/' + this.avatar() );
  // imageAlt = computed<string>( () => this.name() + ' avatar' );

  
}
