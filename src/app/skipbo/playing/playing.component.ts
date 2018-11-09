import { Component } from '@angular/core';
import { Game } from '../../skipbo-core/game';
import { Player } from 'skipbo-core';
import { SkipBoService } from '../services/skipbo.service';
// import { Player } from 'skipbo-core';

@Component({
  selector: 'skipbo-playing',
  templateUrl: './playing.component.html',
  styleUrls: ['./playing.component.scss']
})
export class PlayingComponent {
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
}
