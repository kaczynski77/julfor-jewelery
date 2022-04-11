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
import { useState, useMemo, useEffect } from 'react';
import { usePosts } from './hooks/usePosts';
import PostFilter from './PostFilter';
import PostForm from './PostForm';
import PostList from './postList';
import MyModal from './UI/MyModal/MyModal';
import axios from 'axios';
import PostService from '../pages/api/PostService';

const Upload = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Javascript 2', body: 'Aescription' },
    { id: 3, title: 'Javascript 3', body: 'Bescription' },
  ]);

  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    console.log('USE EFFECT');
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  async function fetchPosts() {
    const posts = await PostService.getAll();
    setPosts(posts);
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  return (
    <>
      <Button fullWidth variant="contained" onClick={fetchPosts}>
        Get posts
      </Button>
      <Button fullWidth variant="outlined" onClick={() => setModal(true)}>
        Create
      </Button>
      <Box sx={{ marginBottom: 2, textAlign: 'center' }}>
        <MyModal visible={modal} setVisible={setModal}>
          <PostForm create={createPost} />
        </MyModal>
      </Box>
      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList remove={removePost} posts={sortedAndSearchedPosts} />
    </>
  );
};

export default Upload;
