import { BuildingPile } from './pile/building-pile';
import { PileGroup } from './pile/pile-group';

export class Game {
  public buildingGroup: PileGroup<BuildingPile>;

  constructor() {
    this.createBuildingPiles();
  }

  createBuildingPiles() {
    this.buildingGroup = new PileGroup<BuildingPile>();
    this.buildingGroup.add(new BuildingPile());
    this.buildingGroup.add(new BuildingPile());
    this.buildingGroup.add(new BuildingPile());
    this.buildingGroup.add(new BuildingPile());
  }
}
