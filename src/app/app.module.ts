import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameOverPageComponent } from './game-over-page/game-over-page.component';
import { WelcomePageModule } from './welcome-page/welcome-page.module';
import { InstructionsPageModule } from './instructions-page/instructions-page.module';
import { GamePageModule } from './game-page/game-page.module';

@NgModule({
  declarations: [
    AppComponent,
    GameOverPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    WelcomePageModule,
    GamePageModule,
    InstructionsPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
