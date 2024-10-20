import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'footer[appFooter]',
  standalone: true,
  template: `
  
    <p>
      An 
      <a href="https://angular.dev/" target="_blank" class="angular">Angular</a>
      Web Application made by 
      <a href="https://nick-polizogopoulos.web.app/" target="_blank">
        Nick Polizogopoulos
      </a>
    </p>
  
  `,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'footer'
  },
  styles: `

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
            color: inherit;

            &:hover {
              color: white;
              text-decoration: underline;
              text-decoration-thickness: 1.5px;
              text-underline-offset: 6px;
            }

            &.angular {
              &:hover {
                color: rgb(211, 16, 156);
              }
            }
            
        }
    }
    
  `
})
export class FooterComponent {}