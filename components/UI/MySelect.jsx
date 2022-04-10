import { NativeSelect } from '@mui/material';

const MySelect = ({ options, value, onChange }) => {
  return (
    <>
      <NativeSelect
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </NativeSelect>
    </>
  );
};

export default MySelect;
