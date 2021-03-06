import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 2 REST Website';
  links = {
    items: ['/items'],
    widgets: ['/widgets'],
    students: ['/students']
  };
}
