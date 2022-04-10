import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';

const MySelect = ({ options, defaultValue }) => {
  const [sort, setSort] = useState('');

  const handleChange = (event) => {
    setSort(event.target.value);
  };
  return (
    <FormControl fullWidth>
      <InputLabel>{defaultValue}</InputLabel>
      <Select onChange={handleChange} label={defaultValue}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MySelect;
