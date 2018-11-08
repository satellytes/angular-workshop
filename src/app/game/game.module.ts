import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PileComponent } from './pile/pile.component';
import { CardComponent } from './card/card.component';
import { SkipBoService } from './skipbo.service';
import { PileGroupComponent } from './pile-group/pile-group.components';
import { PlayerComponent } from './player/player.component';

@NgModule({
  declarations: [CardComponent, PileComponent, PileGroupComponent, PlayerComponent],
  exports: [CardComponent, PileComponent, PileGroupComponent, PlayerComponent],
  providers: [SkipBoService],
  imports: [CommonModule]
})
export class GameModule {}
