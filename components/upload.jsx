import {
  Box,
  Button,
  Container,
  Input,
  Paper,
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

  return (
    <>
      <PostList posts={posts}></PostList>
      <PostForm create={createPost} />
    </>
  );
};

export default Upload;
