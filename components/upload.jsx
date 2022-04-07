import { Box, Button, Container, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import PostItem from './postItem';

const Upload = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Javascript 2', body: 'Description' },
    { id: 3, title: 'Javascript 3', body: 'Description' },
  ]);
  return (
    <>
      {posts.map((post) => (
        <PostItem post={post} />
      ))}
    </>
  );
};

export default Upload;
