import { 
  Component,
  ViewEncapsulation
} from '@angular/core';
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
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'ti-kanw-Thee-mou'
  },
  template: `
  
    <section>
      <header appHeader></header>
      <main>
        
        <aside>
          <app-users />
        </aside>
        
        <section>
          <router-outlet />
        </section>
        
      </main>
    </section>
    <footer appFooter></footer>
  
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {}