import { BuildingPile } from './pile/building-pile';
import { Game } from './game';
import { PileGroup } from './pile/pile-group';
import { Player } from './player';
import { Card } from './card';

let game: Game;

describe('Game', () => {
  beforeEach(() => {
    game = new Game();
  });

  it('has a building pile group', () => {
    expect(game.buildingGroup instanceof PileGroup).toBeTruthy();
  });

  it('has four building piles', () => {
    expect(game.buildingGroup.count).toBe(4);
  });

  it('creates player with reference to myself', () => {
    const player = game.createPlayer();
    expect(player.game).toBe(game);
  });

  describe('start', () => {
    let player1: Player;
    let player2: Player;

    beforeEach(() => {
      player1 = game.createPlayer();
      player2 = game.createPlayer();
    });

    it('can start a game', () => {
      expect(game.start).toBeTruthy();
    });

    it('start shuffles deck', () => {
      const shuffleSpy = spyOn(game.deck, 'shuffle');
      game.start();

      expect(shuffleSpy).toHaveBeenCalled();
    });

    it('start calls dealStockCards', () => {
      const giveSpy = spyOn(game, 'dealStockCards');
      game.start();

      expect(giveSpy).toHaveBeenCalled();
    });

    it('start a game will give stock cards to all players', () => {
      game.start();

      expect(player1.stock.count).toBe(30);
      expect(player2.stock.count).toBe(30);
    });
  });

  it('has completed cards', () => {
    expect(game.completedCards).toBeTruthy();
  });

  it('completed cards are empty by default', () => {
    expect(game.completedCards.length).toBe(0);
  });

  it('can add completed cards', () => {
    game.addCompletedCards(Card.One, Card.Three, Card.Four);
    expect(game.completedCards.length).toBe(3);
  });

  it('mergeCompletedCards merges and shuffles completed cards from building piles', () => {
    game = new Game([]);
    const deckShuffle = spyOn(game.deck, 'shuffle');
    game.addCompletedCards(Card.One, Card.Three, Card.Four);
    game.mergeCompletedCards();

    expect(game.deck.count).toBe(3);
    expect(game.completedCards.length).toBe(0);

    expect(deckShuffle).toHaveBeenCalled();
  });

  describe('Deck', () => {
    it('has a card deck of 162 cards by default', () => {
      expect(game.deck.count).toBe(162);
    });

    it('can receive a custom set of cards', () => {
      game = new Game([Card.One, Card.Two]);
      expect(game.deck.count).toBe(2);
    });
  });

  describe('Player', () => {
    it('can create players', () => {
      const player = game.createPlayer('Player 1');
      expect(player instanceof Player).toBeTruthy();
    });

    it('collects created players', () => {
      game.createPlayer('Player 1');
      game.createPlayer('Player 2');

      expect(game.players.length).toBe(2);
    });

    it('return copy of player list to prevent modifications', () => {
      game.players.push(null);
      expect(game.players.length).toBe(0);
    });

    it('autoamtically name a new player if no name is given', () => {
      game.createPlayer('Some Player');
      game.createPlayer('Other Player');
      const player = game.createPlayer();

      expect(player.name).toBe('Player 3');
    });
  });

  xdescribe('Next Turn', () => {
    let player1: Player;
    let player2: Player;

    beforeEach(() => {
      player1 = game.createPlayer('Player1');
      player2 = game.createPlayer('Player2');
    });

    it('returns a player', () => {
      const player = game.nextPlayer();
      expect(player).toBeInstanceOf(Player);
    });

    it('makes Player 1 current player on the first call', () => {
      game.nextPlayer();
      expect(game.currentPlayer).toEqual(player1);
    });

    it('return following player and returns to current', () => {
      game.nextPlayer(); // Player 1
      expect(game.currentPlayer).toEqual(player1);

      game.nextPlayer(); // Player 2
      expect(game.currentPlayer).toEqual(player2);

      game.nextPlayer(); // Player 1
      expect(game.currentPlayer).toEqual(player1);
    });
  });
});
