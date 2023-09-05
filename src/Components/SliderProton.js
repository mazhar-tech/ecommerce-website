import React from 'react';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/system';

const StyledSlider = styled(Slider)(({ theme }) => ({
  root: {
    width: '100%',
  },
  thumb: {
    color: '#000',
  },
  rail: {
    color: `rgba(0, 0, 0, 0.26)`,
  },
  track: {
    color: '#000',
  },
}));

const SliderProton = ({ value, changePrice }) => {
  return (
    <div>
      <StyledSlider
        value={value}
        onChange={changePrice}
        valueLabelDisplay='on'
        min={1000}
        max={5000}
      />
    </div>
  );
};

export default SliderProton;
