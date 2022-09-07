export interface PiecesInterface {
  name: string;
  id: string;
  possibleMoves: {
    n: {
      x: number;
      y: number;
    };
    s: {
      x: number;
      y: number;
    };
    w: {
      x: number;
      y: number;
    };
    e: {
      x: number;
      y: number;
    };
  };
  currentPosition: {
    x: number;
    y: number;
  };
  initialPosition: {
    b: {
      x: number;
      y: number;
    };
    w: {
      x: number;
      y: number;
    };
  };
}

export interface PieceColorInterface {
  color: string;
  piece: PiecesInterface;
}
