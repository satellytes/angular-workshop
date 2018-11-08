import { Component, HostListener, HostBinding } from '@angular/core';
import { flipAnimation } from './animations';
import { transition, style, animate, trigger } from '@angular/animations';

@Component({
  selector: 'skipbo-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    flipAnimation,
    trigger('appearAnimation', [
      transition(':enter', [
        style({
          transform: 'translateY(100px) scale(1.2)',
          opacity: 0
        }),
        animate('0.3s cubic-bezier(0.23, 1, 0.32, 1)', style({
          transform: 'translateY(0) scale(1)',
          opacity: 1
        }))
      ])
    ]),
  ]
})
export class CardComponent {
  public cardState = 'back';
  public appearAnimate = true;

  @HostListener('click')
  toggle() {
    console.log('toggle');
    if (this.cardState === 'back') {
      this.cardState = 'front';
    } else {
      this.cardState = 'back';
    }
  }

}
