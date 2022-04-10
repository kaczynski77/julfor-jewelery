import { Button, Input, Paper, Box, Grid } from '@mui/material';
import React, { useState } from 'react';

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: '', body: '' });
  };
  return (
    <Paper elevation={1} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Grid
        container
        direction="column"
        rowSpacing={4}
        sx={{ width: 5 / 6, height: 5 / 6, padding: 3 }}
      >
        <Grid item>
          {' '}
          <Input
            fullWidth
            type="text"
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            placeholder="Title"
            value={post.title}
          />
        </Grid>
        <Grid item>
          <Input
            fullWidth
            type="text"
            onChange={(e) => setPost({ ...post, body: e.target.value })}
            placeholder="Description"
            value={post.body}
          />
        </Grid>
        <Grid item>
          <Button fullWidth variant="outlined" onClick={addNewPost}>
            +
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PostForm;
