import React from 'react';
import CheckBox from './CheckBox';
const SizeCheckboxGroup = ({ selectedSizes, onSizeChange }) => {
  const sizeOptions = ['S', 'M', 'L', 'XL', 'XXL'];

  return (
    <div  className="flex-column d-flex">
      {sizeOptions.map(size => (
        <CheckBox
          key={size}
          label={size}
          checked={selectedSizes.includes(size)}
          onChange={() => onSizeChange(size)}
        />
      ))}
    </div>
  );
};

export default SizeCheckboxGroup;
