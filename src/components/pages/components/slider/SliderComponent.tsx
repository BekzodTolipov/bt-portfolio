import { Box, Slider, Typography } from '@mui/material';
import React from 'react';
import './slider-component.css';

export default function SliderComponent(props) {
  function valuetext(value: number) {
    return `$${value}`;
  }

  const changeAmount = (event) => {
    props.setAmount(event.target.value * 100);
  };

  return (
    <Box className='slider-container'>
      <Typography className='slider-amount'>Amount to pay</Typography>
      <Slider
        className='slider-section'
        aria-label='Amount'
        onChange={changeAmount}
        defaultValue={1000}
        getAriaValueText={valuetext}
        valueLabelDisplay='auto'
        step={10}
        marks
        min={10}
        max={100}
      />
    </Box>
  );
}
