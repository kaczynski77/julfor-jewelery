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
import { useState, useMemo } from 'react';
import PostFilter from './PostFilter';
import PostForm from './PostForm';
import PostList from './postList';
import MySelect from './UI/Myselect';

const Upload = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Javascript 2', body: 'Aescription' },
    { id: 3, title: 'Javascript 3', body: 'Bescription' },
  ]);

  const [filter, setFilter] = useState({ sort: '', query: '' });

  const sortedPosts = useMemo(() => {
    console.log('SORTED');
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const defaultValue = 'Sort by';

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <>
      <Box sx={{ marginBottom: 2, textAlign: 'center' }}>
        <Typography variant="h6">Add</Typography>
        <PostForm create={createPost} />
      </Box>
      <PostFilter filter={filter} setFilter={setFilter} />
      {sortedAndSearchedPosts.length !== 0 ? (
        <PostList remove={removePost} posts={sortedAndSearchedPosts} />
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
        </Box>
      )}
    </>
  );
};

export default Upload;
