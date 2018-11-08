import { BuildingPile } from './pile/building-pile';
import { PileGroup } from './pile/pile-group';
import { Player } from './player';
import { Deck } from './deck';
import { generateSkipBoCards, Card } from './card';
import { logger } from './logger';
import { DoublyLinkedListNode, DoublyLinkedList } from './doubly-linked-list';
import { assert } from './utils';

export const STOCK_CARD_COUNT = 30;

export class Game {
  public buildingGroup: PileGroup<BuildingPile>;
  private _completedCards: Card[] = [];
  private _players: DoublyLinkedList<Player> = new DoublyLinkedList();
  private _deck: Deck;
  private _started: Boolean = false;

  private _currentPlayer: DoublyLinkedListNode<Player>;
  private _turnCounter = 0;

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
    this._players.add(player);

    // this._turn.add(player);

    return player;
  }

  enableLogging() {
    logger.enable();
  }

  start() {
    logger.info('Start Game');
    assert(this.players.length > 1, 'You need at least two players to play');
    assert(this._started === false, 'The game is already running');

    this._started = true;
    this._currentPlayer = this._players.head;

    // this.deck.shuffle();
    this.dealStockCards();
  }

  getStockCardCount() {
    return STOCK_CARD_COUNT;
  }

  get currentPlayer(): Player {
    assert(this._started, 'Game did not start yet');
    return this._currentPlayer.value;
  }

  nextPlayer() {
    assert(this._started, 'Game did not start yet');
    // assert(this._currentPlayer.done, 'Current Player is not done yet');

    if (this._currentPlayer.next) {
      this._currentPlayer = this._currentPlayer.next;
    } else {
      this._currentPlayer = this._players.head;
    }

    this._turnCounter++;

    return this.currentPlayer;
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
    return Array.from(this._players.values());
  }

  get turnId() {
    return this._turnCounter;
  }
}
