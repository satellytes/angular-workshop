import { Component, Input } from '@angular/core';
import { Player } from 'src/app/skipbo-core/player';

@Component({
  selector: 'skipbo-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
  @Input() player: Player;
}
