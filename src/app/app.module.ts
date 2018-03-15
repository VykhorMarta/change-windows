import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { OddComponent } from './odd/odd.component';
import { EventComponent } from './event/event.component';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    OddComponent,
    EventComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
