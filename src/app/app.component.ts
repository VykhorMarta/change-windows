import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'app';

  isOpenTours: boolean = true;

  StartAdd(link) {
    if(link % 2) {
      this.isOpenTours = true;
    } else {
      this.isOpenTours = false;
    }
  }
}
