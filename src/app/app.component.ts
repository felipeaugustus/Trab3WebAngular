import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Trab';
  newTitle = "";

  setTitle(evento: Event) {
    this.newTitle = (<HTMLInputElement>evento.target).value;
  }

  changeTitle() {
    this.title = this.newTitle;
  }
}
