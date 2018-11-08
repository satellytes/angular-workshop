import { BuildingPile } from './pile/building-pile';
import { PileGroup } from './pile/pile-group';
import { Player } from './player';
import { Deck } from './deck';
import { generateSkipBoCards, Card } from './card';
import { logger } from './logger';

export const STOCK_CARD_COUNT = 30;

export class Game {
  public buildingGroup: PileGroup<BuildingPile>;
  private _completedCards: Card[] = [];
  private _players: Player[] = [];
  private _deck: Deck;

  constructor(cards: Card[] = null) {
    this._deck = new Deck(cards || generateSkipBoCards());
    this.createBuildingPiles();
  }

  get completedCards(): Card[] {
    return [...this._completedCards];
  }

  addCompletedCards(...cards: Card[]) {
    this._completedCards = this._completedCards.concat(cards);
  }
  mergeCompletedCards() {
    logger.info('Merging completed cards back into the deck');

    // add back cards from the completed deck and shuffle
    this._deck.add(...this._completedCards);
    this._deck.shuffle();

    this._completedCards = [];
  }

  createBuildingPiles() {
    this.buildingGroup = new PileGroup<BuildingPile>();
    this.buildingGroup.add(new BuildingPile());
    this.buildingGroup.add(new BuildingPile());
    this.buildingGroup.add(new BuildingPile());
    this.buildingGroup.add(new BuildingPile());
  }

  createPlayer(name: string = null) {
    const player = new Player(name || `Player ${this.players.length + 1}`, this);
    logger.info(`Added player '${player}'`);
    this._players.push(player);

    // this._turn.add(player);

    return player;
  }

  enableLogging() {
    logger.enable();
  }

  start() {
    logger.info('Start Game');
    this.deck.shuffle();
    this.dealStockCards();
  }

  getStockCardCount() {
    return STOCK_CARD_COUNT;
  }

  dealStockCards() {
    const players = Array.from(this._players.values());
    const count = this.getStockCardCount();

    // we can't draw the full set, result wouldn't be interleaved
    // like it should when you give a card to alternating players.

    for (let i = 0; i < count; i++) {
      players.forEach(player => player.stock.add(...this.deck.draw()));
    }

    logger.group('Dealing stock cards to players');

    players.forEach(player => {
      logger.info(`${player} received ${player.stock.count} stock cards`);
    });

    logger.groupEnd();
  }

  get deck() {
    return this._deck;
  }

  get players() {
    return [...this._players];
  }
}
