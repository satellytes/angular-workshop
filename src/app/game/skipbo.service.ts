import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class SkipBoService {
  // private _game: Game;
  // public playerSubject: Subject<Player[]> = new BehaviorSubject([]);
  // public player$: Observable<Player[]>;

  constructor() {
    // this._game = new Game();
    // this.player$ = this.playerSubject.asObservable();
  }

  addPlayer(name: string): void {
    //   const player = this._game.createPlayer(name);
    //   this.playerSubject.next(this._game.getPlayers());
    //   return player;
  }

  start() {
    // this._game.dealStockCards();
    // const players = this._game.getPlayers();
    // console.log(players[0].getStockCards());
  }
}