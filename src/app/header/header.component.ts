import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'header[appHeader]',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'header'
  }
})
export class HeaderComponent {

}
