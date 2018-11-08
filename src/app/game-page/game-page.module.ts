import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamePageComponent } from './game-page.component';
import { GameModule } from '../game/game.module';
import { SkipBoService } from '../game/skipbo.service';

@NgModule({
  declarations: [
    GamePageComponent
  ],
  imports: [
    CommonModule,
    GameModule
  ]
})
export class GamePageModule { }
