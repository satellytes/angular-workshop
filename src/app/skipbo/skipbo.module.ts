import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { PileGroupComponent } from './components/pile-group/pile-group.components';
import { PileComponent } from './components/pile/pile.component';
import { PlayerComponent } from './components/player/player.component';
import { SkipboComponent } from './skipbo/skipbo.component';
import { GameoverComponent } from './gameover/gameover.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { PlayingComponent } from './playing/playing.component';
import { SkipBoService } from './services/skipbo.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { GameRoutingModule } from './skipbo-routing.module';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [
    CardComponent,
    PileComponent,
    PileGroupComponent,
    PlayerComponent,
    GameoverComponent,
    SkipboComponent,
    PlayingComponent,
    InstructionsComponent,
    WelcomeComponent
  ],
  exports: [CardComponent, PileComponent, PileGroupComponent, PlayerComponent],
  providers: [SkipBoService],
  imports: [CommonModule, GameRoutingModule, SharedModule]
})
export class SkipboModule {}
