import React from 'react';
import './blockContainer.css';

export default function BlockContainer(props) {
  let inputStyle;
  if (props.id % 2 === 0) {
    inputStyle = {
      float: 'left',
    };
  } else {
    inputStyle = {
      float: 'right',
    };
  }
  return (
    <div>
      <div className='block-container'>
        <img
          className='block-image'
          style={inputStyle}
          src={props.img}
          alt={props.alt}
        />
        <p className='block-content'>{props.content}</p>
      </div>
    </div>
  );
}
