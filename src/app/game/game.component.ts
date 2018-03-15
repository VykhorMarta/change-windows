import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Output()
  onOpenLink = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
  }

  StartAdd(link) {
    this.onOpenLink.emit(link);
  }
}
