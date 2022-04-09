import { Button, Input } from '@mui/material';
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
    <div>
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
    </div>
  );
};

export default PostForm;
