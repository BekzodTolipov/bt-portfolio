// import React from 'react';
// import { SquareProps } from '../../interface/SquareInterface';

// const boardSquareStyles = {
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   width: '100%',
//   height: '100%',
//   fontSize: '5vw',
// };

// export const Square = (props: SquareProps) => {
//   let backgroundColor: string = props.isWhite ? '#EADAB9' : '#C2A482';
//   if (props.isPicked) {
//     backgroundColor = 'lime';
//   } else if (props.isValidDestination) {
//     backgroundColor = 'yellow';
//   }

//   return (
//     <div
//       style={Object.assign({}, boardSquareStyles, { backgroundColor })}
//       onClick={() => {
//         props.onClick();
//       }}
//     >
//       {props.piece}
//     </div>
//   );
// };
