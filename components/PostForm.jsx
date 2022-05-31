import { Button, Input, Paper, Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';

import UploadImg from './UploadImg';
import FormControl from '@mui/material/FormControl';

const PostForm = ({ create }) => {
  const [post, setPost] = useState({
    id: '',
    title: '',
    price: '',
    description: '',
    image: null,
    category: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resetForm = () => {
      setPost({ ...post, title: '', price: '', description: '', category: '' });
     
    }

    const body = { ...post };
    try {
      const response = await fetch('/api/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (response.status !== 200) {
        console.log('something went wrong');
        //set an error banner here
      } else {
        console.log('form submitted successfully !!!');

        const responseData = await response.json();
       
        const newPost = { ...post, id: responseData.id };
        create(newPost);
        
       

        //window.location.reload(false);

        //set a success banner here
      }
      //check response, if success is false, dont take them to success page
    } catch (error) {
      console.log('there was an error submitting', error);
    }
    resetForm();
  };

  



  return (
    <Paper elevation={10}>
      <form action="#" method="POST" onSubmit={(e) => handleSubmit(e)}>
        <Grid
          container
          direction="column"
          rowSpacing={4}
          sx={{ width: 5 / 6, height: 5 / 6, padding: 3 }}
        >
          <Grid item>
            {' '}
            <Input
              required
              fullWidth
              type="text"
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              placeholder="Title"
              name="title"
            />
          </Grid>

          <Grid item>
            <Input
              required
              fullWidth
              type="text"
              value={post.description}
              onChange={(e) =>
                setPost({ ...post, description: e.target.value })
              }
              placeholder="Description"
              name="description"
            />
          </Grid>
          <Grid item>
            <Input
              required
              fullWidth
              type="text"
              value={post.price}
              onChange={(e) => setPost({ ...post, price: e.target.value })}
              placeholder="price"
            />
          </Grid>
          <Grid item>
            <Input
              required
              fullWidth
              type="text"
              value={post.category}
              onChange={(e) => setPost({ ...post, category: e.target.value })}
              placeholder="category"
            />
          </Grid>
          <Grid item>
            <a href="/admin">
              <Button fullWidth variant="outlined" type="submit">
                +
              </Button>
            </a>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default PostForm;
