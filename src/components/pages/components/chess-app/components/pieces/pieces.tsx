import uuid from 'react-uuid';
import { PiecesInterface } from '../interface/pieces';

export const King = (): PiecesInterface => {
  return {
    name: 'King',
    id: uuid(),
    possibleMoves: {
      n: {
        x: 0,
        y: 0,
      },
      s: {
        x: 0,
        y: 0,
      },
      w: {
        x: 0,
        y: 0,
      },
      e: {
        x: 0,
        y: 0,
      },
    },
    initialPosition: {
      b: {
        x: 0,
        y: 4,
      },
      w: {
        x: 7,
        y: 4,
      },
    },
    currentPosition: {
      x: 0,
      y: 0,
    },
  };
};

export const Queen = (): PiecesInterface => {
  return {
    name: 'Queen',
    id: uuid(),
    possibleMoves: {
      n: {
        x: 0,
        y: 0,
      },
      s: {
        x: 0,
        y: 0,
      },
      w: {
        x: 0,
        y: 0,
      },
      e: {
        x: 0,
        y: 0,
      },
    },
    initialPosition: {
      b: {
        x: 0,
        y: 3,
      },
      w: {
        x: 7,
        y: 3,
      },
    },
    currentPosition: {
      x: 0,
      y: 0,
    },
  };
};

export const Rook = (): PiecesInterface => {
  return {
    name: 'Rook',
    id: uuid(),
    possibleMoves: {
      n: {
        x: 0,
        y: 0,
      },
      s: {
        x: 0,
        y: 0,
      },
      w: {
        x: 0,
        y: 0,
      },
      e: {
        x: 0,
        y: 0,
      },
    },
    initialPosition: {
      b: {
        x: 0,
        y: 0,
      },
      w: {
        x: 0,
        y: 0,
      },
    },
    currentPosition: {
      x: 0,
      y: 0,
    },
  };
};

export const Bishop = (): PiecesInterface => {
  return {
    name: 'Bishop',
    id: uuid(),
    possibleMoves: {
      n: {
        x: 0,
        y: 0,
      },
      s: {
        x: 0,
        y: 0,
      },
      w: {
        x: 0,
        y: 0,
      },
      e: {
        x: 0,
        y: 0,
      },
    },
    initialPosition: {
      b: {
        x: 0,
        y: 0,
      },
      w: {
        x: 0,
        y: 0,
      },
    },
    currentPosition: {
      x: 0,
      y: 0,
    },
  };
};

export const Knight = (): PiecesInterface => {
  return {
    name: 'Knight',
    id: uuid(),
    possibleMoves: {
      n: {
        x: 0,
        y: 0,
      },
      s: {
        x: 0,
        y: 0,
      },
      w: {
        x: 0,
        y: 0,
      },
      e: {
        x: 0,
        y: 0,
      },
    },
    initialPosition: {
      b: {
        x: 0,
        y: 0,
      },
      w: {
        x: 0,
        y: 0,
      },
    },
    currentPosition: {
      x: 0,
      y: 0,
    },
  };
};

export const Pawn = (): PiecesInterface => {
  return {
    name: 'Pawn',
    id: uuid(),
    possibleMoves: {
      n: {
        x: 0,
        y: 0,
      },
      s: {
        x: 0,
        y: 0,
      },
      w: {
        x: 0,
        y: 0,
      },
      e: {
        x: 0,
        y: 0,
      },
    },
    initialPosition: {
      b: {
        x: 0,
        y: 0,
      },
      w: {
        x: 0,
        y: 0,
      },
    },
    currentPosition: {
      x: 0,
      y: 0,
    },
  };
};
