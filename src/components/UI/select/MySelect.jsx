import React from 'react';

function MySelect({options, defaultValue, value, onChange}) {
  return (
    <div>
      <select 
        value={value}
        onChange={(evt) => onChange(evt.target.value)}
      >
        <option value='' disabled>{defaultValue}</option>
        {options.map((option) => 
          <option value={option.value} key={option.value}>
            {option.name}
          </option>)}
       </select>
    </div>
  );
}

export default MySelect;