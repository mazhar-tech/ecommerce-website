import React from 'react';
import '../Style/checkboxcss.css'
const CheckBox = ({ label, checked, onChange }) => {
  return (
    <label className='checkbox-label'>
      <input className='checkbox-input'
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  );
};

export default CheckBox;