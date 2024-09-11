import { Component, OnInit } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { type User, dummy_users } from './utilities/users';
import { Title } from '@angular/platform-browser';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    UserComponent,
    TasksComponent,
    FooterComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(
    private title:Title
  ) {}

  ngOnInit():void {
    this.title.setTitle('Easy Task Manager');
  }
  
  users:User[] = dummy_users;
  
  selectedUser?:User;

  onCloseTasks():void {
    this.selectedUser = undefined;
  }
  
  onSelectUser( id:string ) {
    this.selectedUser = this.users.find( user => user.id === id )!;
  }
}
