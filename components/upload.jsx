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
import PostForm from './PostForm';
import PostList from './postList';
import MySelect from './UI/Myselect';

const Upload = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Javascript 2', body: 'Aescription' },
    { id: 3, title: 'Javascript 3', body: 'Bescription' },
  ]);

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const sortedPosts = useMemo(() => {
    console.log('SORTED');
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, sortedPosts]);

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const defaultValue = 'Sort by';

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <>
      <Box sx={{ marginBottom: 2, textAlign: 'center' }}>
        <Typography variant="h6">Add</Typography>
        <PostForm create={createPost} />
      </Box>

      <input
        value={searchQuery}
        placeholder="Search"
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
      ></input>

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
