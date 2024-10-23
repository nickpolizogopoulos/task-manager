import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'footer[appFooter]',
  standalone: true,
  template: `
  
    An 
    <a href="https://angular.dev/" target="_blank" class="angular">Angular</a>
    Web Application made by 
    <a href="https://nick-polizogopoulos.web.app/" target="_blank">
      Nick Polizogopoulos
    </a>
  
  `,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'footer'
  },
  styles: `

    @use '../../app/utilities/colour-palette' as *;
    @use '../utilities/common.scss';

    .footer {
        margin: 0 auto;
        width: 90%;
        max-width: 50rem;
        text-align: center;
        background: linear-gradient(
            to top,
            #0A162C,
            #282D40
        );
        padding: 1rem;
        border-radius: 12px 12px 0 0;
        border: 2px solid rgba(255, 255, 255, 0.3);
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.495) inset;
        user-select: none;

        a {
          @extend %text-decoration;
          color: inherit;
          &:hover {
            text-decoration: none;
          }
        }

        a:first-of-type {
          &:hover {
            @extend %angular;
          }
        }
        
        a:last-of-type {
          &:hover {
            color: $grey;
          }
        }
    }
    
  `
})
export class FooterComponent {}