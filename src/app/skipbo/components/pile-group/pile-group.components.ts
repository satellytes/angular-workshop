import { Component, OnInit, Input } from '@angular/core';
import { PileGroup } from 'src/app/skipbo-core/pile/pile-group';
import { BuildingPile } from 'src/app/skipbo-core/pile/building-pile';
import { DiscardPile } from 'src/app/skipbo-core/pile/discard-pile';

@Component({
  selector: 'skipbo-pilegroup',
  templateUrl: './pile-group.component.html',
  styleUrls: ['./pile-group.component.scss']
})
export class PileGroupComponent {
  @Input() group: PileGroup<BuildingPile | DiscardPile>;
}
