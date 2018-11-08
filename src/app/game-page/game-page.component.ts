import { Component, OnInit } from '@angular/core';
import { SkipBoService } from '../game/skipbo.service';
import { Subject, Observable } from 'rxjs';
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
  }

  add() {
    this.cards.push(1);
  }
}
