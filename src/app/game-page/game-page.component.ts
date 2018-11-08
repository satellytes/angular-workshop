import { Component, OnInit } from '@angular/core';
import { SkipBoService } from '../game/skipbo.service';
import { Subject, Observable } from 'rxjs';
import { BuildingPile } from '../skipbo-core/pile/building-pile';
import { Card } from '../skipbo-core/card';
// import { Player } from 'skipbo-core';

@Component({
  selector: 'skipbo-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent {
  public cards = [1];
  // public players$: Observable<Player[]>;

  constructor(private skipboService: SkipBoService) {
    // this.players$ = this.skipboService.player$;
    this.skipboService.addPlayer('Player A');
    // this.skipboService.addPlayer('Player B');

    this.skipboService.start();
    this.skipboService.game.buildingGroup.autoPlace(Card.One);
    this.skipboService.game.buildingGroup.autoPlace(Card.Two);
    this.skipboService.game.buildingGroup.autoPlace(Card.Three);
    this.skipboService.game.buildingGroup.autoPlace(Card.One);

    for (const pile of this.skipboService.buildingPiles) {
      pile.cards.subscribe(card => {
        console.log('card', card);
      });
    }
  }

  get buildingPiles(): BuildingPile[] {
    return this.skipboService.buildingPiles;
  }

  add() {
    this.cards.push(1);
  }

  addRandomCard() {
    const game = this.skipboService.game;
    game.buildingGroup.autoPlace(Card.SkipBo);
  }
}
