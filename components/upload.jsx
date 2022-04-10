import {
  Box,
  Button,
  Container,
  FormControl,
  Input,
  InputLabel,
  Paper,
  Select,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import PostForm from './PostForm';
import PostList from './postList';
import MySelect from './UI/Myselect';

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

  const [selectedSort, setSelectedSort] = useState('');

  const defaultValue = 'Sort by';

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    console.log(sort);
  };

  return (
    <>
      <Box sx={{ marginBottom: 2, textAlign: 'center' }}>
        <Typography variant="h6">Add</Typography>
        <PostForm create={createPost} />
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <FormControl fullWidth>
          <InputLabel variant="standard">{defaultValue}</InputLabel>
          <MySelect
            value={selectedSort}
            onChange={sortPosts}
            options={[
              { value: 'title', name: 'Title' },
              { value: 'body', name: 'Description' },
            ]}
          />
        </FormControl>
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
