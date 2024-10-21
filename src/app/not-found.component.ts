import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-not-found',
    standalone: true,
    imports: [
        RouterLink
    ],
    template: `
    
        <h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-exclamation-triangle" viewBox="0 -1 16 16">
                <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z"/>
                <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
            </svg>
            Not found!
        </h2>
        <hr>
        <p>Unfortunately, the requested resource could not be found!</p>

        <button routerLink="/">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-arrow-left" viewBox="0 -3 16 16">
                  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                </svg>
            </span>
            home
        </button>
    
    `,
    styles: `

        hr {
            margin: 10px 0 20px 0; 
        }
        
        button {
            margin-top: 50px;
            font: inherit;
            cursor: pointer;
            padding: 0.17rem 1.2rem;
            border-radius: 4px;
            background-color: transparent;
            border: 2px solid transparent;
            color: #bcbcbc;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: .4rem;
            border: 2px solid #83828B;
            
            &:hover,
            &:active,
            &:focus {
                color: grey;
            }
        }
    
    `
})
export class NotFoundComponent{}