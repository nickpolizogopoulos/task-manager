import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-not-found',
    standalone: true,
    imports: [
        RouterLink
    ],
    template: `
    
        <h2>Not found!</h2>
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
            &:active {
                color: white;
            }
        }
    
    `
})
export class NotFoundComponent{}