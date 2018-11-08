import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SkipBoService } from '../game/skipbo.service';
import { Player } from '../skipbo-core/player';

@Component({
  selector: 'skipbo-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {
  constructor(public skipbo: SkipBoService) {}

  ngOnInit() {
    if (this.skipbo.players.length === 0) {
      this.skipbo.addPlayer();
      this.skipbo.addPlayer();
    }
  }

  addPlayer() {
    this.skipbo.addPlayer();
  }

  get players(): Player[] {
    return this.skipbo.players;
  }
}
