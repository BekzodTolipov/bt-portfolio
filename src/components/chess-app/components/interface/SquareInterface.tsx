import { Piece } from '../enum/pieces';

export interface SquareProps {
  isWhite: boolean;
  piece: Piece;
  onClick: { function(): void };
  isPicked: boolean;
  isValidDestination: boolean;
}
