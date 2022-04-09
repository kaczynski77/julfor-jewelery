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
import PostList from './postList';

const Upload = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Javascript 2', body: 'Description' },
    { id: 3, title: 'Javascript 3', body: 'Description' },
  ]);

  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ title: '', body: '' });
  };

  return (
    <>
      <PostList posts={posts}></PostList>
      <Input
        type="text"
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        placeholder="Title"
        value={post.title}
      />
      <Input
        type="text"
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        placeholder="Description"
        value={post.body}
      />
      <Button onClick={addNewPost}>+</Button>
    </>
  );
};

export default Upload;
