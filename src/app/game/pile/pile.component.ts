import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'skipbo-pile',
  templateUrl: './pile.component.html',
  styleUrls: ['./pile.component.scss']
})
export class PileComponent {
  @Input() cards = [];
}
