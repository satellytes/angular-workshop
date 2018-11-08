import { Player, HAND_CARD_COUNT } from './player';
import { Game } from './game';
import { getFullTestDeck } from './testdeck';
import { Card } from './card';

let player: Player;

const createPlayer = (name, game: Game = null) => {
  return new Player(name, game);
};

describe('Player', () => {
  beforeEach(() => {
    player = new Player('Player 1');
  });

  it('has a name', () => {
    expect(player.name).toBe('Player 1');
  });

  it('has a discard group of 4 piles', () => {
    expect(player.discardGroup.count).toBe(4);
  });

  it('has hand cards', () => {
    expect(player.hand).toBeTruthy();
  });

  it('has hand cards with limit of 5', () => {
    expect(player.hand.limit).toBe(5);
  });

  it('has stock cards', () => {
    expect(player.stock).toBeTruthy();
  });

  it('toString resolves to name', () => {
    expect(player.toString()).toEqual('Player 1');
  });

  describe('Playing', () => {
    let player1: Player;
    let player2: Player;
    let game: Game;

    beforeEach(() => {
      game = new Game(getFullTestDeck());
      player1 = createPlayer('Player 1', game);
      player2 = createPlayer('Player 2', game);
    });

    it('has reference to game', () => {
      expect(player1.game).toBe(game);
    });

    it('fills up hand from deck', () => {
      player1.fillHand();

      expect(player1.hand.cards.length).toBe(HAND_CARD_COUNT);
      expect(player1.hand.cards).toEqual([Card.Five, Card.Ten, Card.SkipBo, Card.Ten, Card.Ten]);
    });

    it('fills up only difference', () => {
      player1.fillHand();

      player1.hand.draw(Card.SkipBo);
      player1.hand.draw(Card.Five);

      expect(player1.hand.count).toBe(3);

      player1.fillHand();

      expect(player1.hand.cards.length).toBe(HAND_CARD_COUNT);
      expect(player1.hand.cards).toEqual([Card.Ten, Card.Ten, Card.Ten, Card.Twelve, Card.SkipBo]);
    });

    it('fills will trigger a merge of completed cards', () => {
      game = new Game([]);
      player1 = createPlayer('Player', game);

      const spyMerge = spyOn(game, 'mergeCompletedCards').and.callThrough();

      game.addCompletedCards(Card.One, Card.One, Card.One, Card.One, Card.One);
      player1.fillHand();

      expect(spyMerge).toHaveBeenCalled();
    });
  });
});

// import { Player, HAND_CARD_COUNT } from './player';
// import { Game } from './game';
// import { Card } from './card';
// import { getFullTestDeck } from './testdeck';

// let player1: Player;
// let player2: Player;
// let defaultGame: Game;

// const createPlayer = (name, game = null) => {
//   return new Player(name, game);
// };

// beforeEach(() => {
//   defaultGame = new Game(getFullTestDeck());
//   player1 = createPlayer('Player 1', defaultGame);
//   player2 = createPlayer('Player 2', defaultGame);
// });

// it('fills up hand from deck', () => {
//   player1.fillHand();

//   expect(player1.getHandCards()).toEqual(
//     expect.arrayContaining([Card.Five, Card.Ten, Card.SkipBo, Card.Ten, Card.Ten])
//   );
// });

// it('handIsEmpty return true when empty', () => {
//   expect(player1.handIsEmpty()).toBeTruthy();
//   player1.fillHand();
//   expect(player1.handIsEmpty()).toBeFalsy();
// });

// it('trigger deck reset when deck is not full enough', () => {
//   const game = new Game([Card.One]);
//   game.completedDeck = [Card.One, Card.One, Card.One, Card.One, Card.Four];

//   const testplayer = createPlayer('Testplayer', game);

//   testplayer.fillHand();

//   expect(testplayer.getHandCards()).toHaveLength(5);
// });

// it('fills up only difference', () => {
//   player1.fillHand();

//   player1.drawHandCard(Card.SkipBo);
//   player1.drawHandCard(Card.Five);

//   expect(player1.getHandCards()).toHaveLength(3);

//   player1.fillHand();

//   expect(player1.getHandCards()).toHaveLength(HAND_CARD_COUNT);
//   expect(player1.getHandCards()).toEqual(
//     expect.arrayContaining([Card.Ten, Card.Ten, Card.Ten, Card.Twelve, Card.SkipBo])
//   );
// });

// it('remove card from hand', () => {
//   const cardOnHand = Card.Ten;

//   player1.fillHand();
//   const handCardsBefore = player1.getHandCards();

//   player1.drawHandCard(cardOnHand);

//   const handCardsAfter = player1.getHandCards();

//   expect(handCardsBefore).toHaveLength(HAND_CARD_COUNT);
//   expect(handCardsAfter).toHaveLength(HAND_CARD_COUNT - 1);
// });

// it('get stock cards', () => {
//   player1.addStockCard(Card.One, Card.Two, Card.Three);
//   const stockCards = player1.getStockCards();
//   expect(stockCards).toHaveLength(3);
// });

// it('draw stock card', () => {
//   const player1 = new Player('Player', defaultGame);
//   player1.addStockCard(Card.Twelve, Card.Eleven, Card.Ten);

//   const card = player1.drawStockCard();
//   expect(card).toBe(Card.Ten);
// });

// it('get stock card', () => {
//   player1.addStockCard(Card.One, Card.Two, Card.Three);
//   expect(player1.currentStockCard).toBe(Card.Three);
// });

// it('can discard a hand card', () => {
//   player1.fillHand();

//   const handCardsBefore = player1.getHandCards();
//   player1.discardHandCard();

//   const handCardsAfter = player1.getHandCards();
//   expect(handCardsBefore.length - 1).toBe(handCardsAfter.length);
// });

// it('is complete when no stock cars are left', () => {
//   player1.addStockCard(Card.Twelve, Card.Eleven, Card.Ten);
//   expect(player1.complete).toBeFalsy();
// });

// it('is complete when no stock cards are left', () => {
//   const player = createPlayer('Test Player');

//   expect(player.complete).toBeTruthy();
// });
