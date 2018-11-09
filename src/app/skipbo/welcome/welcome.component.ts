import { Component, OnInit } from '@angular/core';
import { SkipBoService } from '../services/skipbo.service';
import { Player } from 'skipbo-core';

@Component({
  selector: 'skipbo-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
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
