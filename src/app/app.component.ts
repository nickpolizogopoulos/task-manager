import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './common-components/header.component';
import { FooterComponent } from "./common-components/footer.component";
import { UsersComponent } from './users/users.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    UsersComponent,
    FooterComponent
  ],
  template: `
  
    <header appHeader></header>
    <main>

      <aside>
        <app-users />
      </aside>
        
      <section>
        <router-outlet />
      </section>

    </main>
    <footer appFooter></footer>
  
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {}