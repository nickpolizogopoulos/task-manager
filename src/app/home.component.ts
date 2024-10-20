import { Component, inject, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
    selector: 'app-home',
    standalone: true,
    template: `

        <h2>Select a user to view and edit their tasks.</h2>
        <hr>
        <p>
            Any edits will be saved in your browser's local storage,
            allowing you to revisit them each time you return to this application!
        </p>
        <p>Thank you!</p>
            
    `,
    styles: `
    
        hr {
            margin: 25px 0;
        }

        p:first-of-type {
            margin-bottom: 30px;
        }
    
    `
})
export class HomeComponent implements OnInit {

    private title = inject(Title);
  
    ngOnInit(): void {
      this.title.setTitle('Easy Task Manager');
    }
  
  }
  