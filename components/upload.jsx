import {
  Box,
  Button,
  Container,
  Input,
  Paper,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import PostItem from './postItem';

const Upload = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Javascript 2', body: 'Description' },
    { id: 3, title: 'Javascript 3', body: 'Description' },
  ]);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body,
    };
    setPosts([...posts, newPost]);
  };

  return (
    <>
      {posts.map((post) => (
        <PostItem post={post} />
      ))}
      <Input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        value={title}
      />
      <Input
        type="text"
        onChange={(e) => setBody(e.target.value)}
        placeholder="Description"
        value={body}
      />
      <Button onClick={addNewPost}>+</Button>
    </>
  );
};

export default Upload;
