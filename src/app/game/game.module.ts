import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PileComponent } from './pile/pile.component';
import { CardComponent } from './card/card.component';
import { SkipBoService } from './skipbo.service';

@NgModule({
  declarations: [
    CardComponent,
    PileComponent
  ],
  exports: [
    CardComponent,
    PileComponent
  ],
  providers: [
    SkipBoService
  ],
  imports: [
    CommonModule
  ]
})
export class GameModule { }
