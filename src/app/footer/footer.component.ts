import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'footer[appFooter]',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'footer'
  }
})
export class FooterComponent {

}
