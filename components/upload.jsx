import {
  Box,
  Button,
  Container,
  Input,
  Paper,
  Select,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import PostForm from './PostForm';
import PostList from './postList';

const Upload = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Javascript 2', body: 'Description' },
    { id: 3, title: 'Javascript 3', body: 'Description' },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <>
      <Box sx={{ marginBottom: 2, textAlign: 'center' }}>
        <Typography variant="h6">Add</Typography>
        <PostForm create={createPost} />
      </Box>
      <Box sx={{ marginBottom: 2, textAlign: 'center' }}>
        <Select fullWidth name="" id=""></Select>
      </Box>
      {posts.length !== 0 ? (
        <PostList remove={removePost} posts={posts} />
      ) : (
        <Box>
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              marginTop: 10,
              textTransform: 'uppercase',
            }}
          >
            No posts found
          </Typography>
          <Typography variant="h4" sx={{ textAlign: 'center', marginTop: 2 }}>
            please add a post using the form above
          </Typography>
        </Box>
      )}
    </>
  );
};

export default Upload;
