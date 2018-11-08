import { BuildingPile } from './pile/building-pile';
import { Game } from './game';
import { PileGroup } from './pile/pile-group';

let game: Game;

fdescribe('Game', () => {
  beforeEach(() => {
    game = new Game();
  });

  it('has a building pile group', () => {
    expect(game.buildingGroup instanceof PileGroup).toBeTruthy();
  });

  it('has four building piles', () => {
    expect(game.buildingGroup.count).toBe(4);
  });
});
