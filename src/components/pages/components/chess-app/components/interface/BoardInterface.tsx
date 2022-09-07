import { Coordinate } from '../Create-Game.tsx/square/Coordinate';
import { Piece } from '../enum/pieces';

export interface BoardProps {
  squares: Array<Array<Piece>>;
  pickedSquare: Coordinate;
  validDestination: Array<Coordinate>;
  onClick: { function(Coordinate): void };
}
