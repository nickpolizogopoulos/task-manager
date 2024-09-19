import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'header[appHeader]',
  standalone: true,
  template: `
  
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
      <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
      <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
    </svg>
    <h1>Easy Task Manager</h1>
    <p>The no.1 Enterprise-Level Task Management System!</p>
    
  `,
  styles: `
  
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      width: 90%;
      max-width: 50rem;
      margin: 1px auto 1rem auto;
      text-align: center;
      background: linear-gradient(
            to top,
            #282D40,
            #0A162C
        );
      padding: 1rem;
      border-radius: 0 0 12px 12px ;
      box-shadow: 0 1px 8px rgba(0, 0, 0, 0.6);
      border: 2px solid rgba(255, 255, 255, 0.3);
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.495) inset;
      user-select: none;
    }

    @media (min-width: 768px) {
        header {
            padding: 2rem;
        }

        img {
            width: 4.5rem;
        }

        h1 {
            font-size: 1.5rem;
            margin: 0;
            padding: 0;
        }
    }

  `
})
export class HeaderComponent {}