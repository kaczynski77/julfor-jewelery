import { Box, FormControl, InputLabel } from '@mui/material';
import React from 'react';
import MySelect from './UI/MySelect';

const PostFilter = ({ filter, setFilter }) => {
  const defaultValue = 'Sort by';
  return (
    <div>
      <input
        value={filter.query}
        placeholder="Search"
        type="text"
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />

      <Box sx={{ marginBottom: 2 }}>
        <FormControl fullWidth>
          <InputLabel variant="standard">{defaultValue}</InputLabel>
          <MySelect
            value={filter.sort}
            onChange={(selectedSort) =>
              setFilter({ ...filter, sort: selectedSort })
            }
            options={[
              { value: 'title', name: 'Title' },
              { value: 'body', name: 'Description' },
            ]}
          />
        </FormControl>
      </Box>
    </div>
  );
};

export default PostFilter;
