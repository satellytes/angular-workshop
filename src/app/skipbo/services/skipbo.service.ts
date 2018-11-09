import { Injectable } from '@angular/core';
import { Game } from '../../skipbo-core/game';
import { Player } from '../../skipbo-core/player';
import { getFullTestDeck } from '../../skipbo-core/testdeck';

@Injectable()
export class SkipBoService {
  private _game: Game;
  // public playerSubject: Subject<Player[]> = new BehaviorSubject([]);
  // public player$: Observable<Player[]>;

  constructor() {
    this._game = new Game();
    // this._game = new Game(getFullTestDeck());
    this._game.enableLogging();
  }

  get game(): Game {
    return this._game;
  }

  addPlayer(name: string = null): void {
    this._game.createPlayer(name);
  }

  get players(): Player[] {
    return this._game.players;
  }

  get gameStarted() {
    return this.game.started;
  }

  start() {
    // this._game.dealStockCards();
    // const players = this._game.getPlayers();
    // console.log(players[0].getStockCards());
  }
}
