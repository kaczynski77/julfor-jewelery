import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';

const MySelect = ({ options, defaultValue }) => {
  console.log(defaultValue);
  const [sort, setSort] = useState('');
  const handleChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <>
      <InputLabel>{defaultValue}</InputLabel>
      <Select onChange={handleChange} label={defaultValue}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default MySelect;
