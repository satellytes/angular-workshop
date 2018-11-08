import { Game } from './game';
import { DiscardPile } from './pile/discard-pile';
import { PileGroup } from './pile/pile-group';
import { Hand } from './hand';
import { Deck } from './deck';
import { logger } from './logger';

export const HAND_CARD_COUNT = 5;

const HAND_LIMIT = 5;

export class Player {
  discardGroup: PileGroup<DiscardPile> = new PileGroup();
  private _hand: Hand = new Hand(HAND_LIMIT);
  private _stock: Deck = new Deck();

  constructor(private _name: string, private _game: Game = null) {
    this.buildDiscardPiles();
  }

  get game(): Game {
    return this._game;
  }

  get hand(): Hand {
    return this._hand;
  }

  get stock(): Deck {
    return this._stock;
  }

  get name(): string {
    return this._name;
  }

  fillHand() {
    const delta = HAND_CARD_COUNT - this.hand.count;
    logger.info(`Drawing ${delta} cards`);

    if (!this._game.deck.canDraw(delta)) {
      // shuffle completed decks back in
      this._game.mergeCompletedCards();
    }

    this.hand.add(...this._game.deck.draw(delta));
  }

  buildDiscardPiles() {
    this.discardGroup.add(new DiscardPile());
    this.discardGroup.add(new DiscardPile());
    this.discardGroup.add(new DiscardPile());
    this.discardGroup.add(new DiscardPile());
  }

  toString() {
    return this.name;
  }
}
