import { Component, OnInit } from '@angular/core';
import { SkipBoService } from '../game/skipbo.service';
import { Subject, Observable } from 'rxjs';
import { BuildingPile } from '../skipbo-core/pile/building-pile';
import { Card } from '../skipbo-core/card';
import { Game } from '../skipbo-core/game';
import { Player } from '../skipbo-core/player';
// import { Player } from 'skipbo-core';

@Component({
  selector: 'skipbo-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent {
  private _game: Game;
  public cards = [1];
  // public players$: Observable<Player[]>;

  constructor(private skipboService: SkipBoService) {
    // this.players$ = this.skipboService.player$;
    if (this.skipboService.players.length === 0) {
      this.skipboService.addPlayer('Player A');
      this.skipboService.addPlayer('Player B');
    }

    // this.skipboService.start();

    this._game = this.skipboService.game;
    this._game.enableLogging();
    // this._game.createPlayer('Player A');
    // this._game.createPlayer('Player B');

    this._game.start();
  }

  get players(): Player[] {
    return this._game.players;
  }

  get game(): Game {
    return this._game;
  }

  add() {
    this.cards.push(1);
  }

  drawFromDeck() {
    const [card] = this.game.deck.draw();
    return card;
  }

  addRandomCard() {
    this._game.buildingGroup.autoPlace(Card.SkipBo);
  }

  addPlayer() {
    this._game.createPlayer();
  }
}
