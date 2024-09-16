import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'footer[appFooter]',
  standalone: true,
  imports: [],
  template: `
  
    <p>
      An 
      <a href="https://angular.dev/" target="_blank">
        Angular
      </a>
      Web Application made by 
      <a href="https://nick-polizogopoulos.web.app/" target="_blank">
        Nick Polizogopoulos
      </a>
    </p>
  
  `,
  styleUrl: './footer.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'footer'
  }
})
export class FooterComponent {

}
