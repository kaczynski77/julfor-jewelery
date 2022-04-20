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

  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

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
        setId(responseData.id);
        console.log(id);
        const newPost = { ...post, id: responseData.id };
        create(newPost);
        setPost({
          id: '',
          title: '',
          price: '',
          description: '',
          category: '',
        });
        resetForm();

        //window.location.reload(false);

        //set a success banner here
      }
      //check response, if success is false, dont take them to success page
    } catch (error) {
      console.log('there was an error submitting', error);
    }
  };

  const resetForm = () => {
    setTitle('');
    setPrice('');
    setCategory('');
    setDescription('');
  };

  const [uploadImage, setUploadImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setUploadImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const uploadToServer = async (event) => {
    const body = new FormData();
    console.log('file', uploadImage);
    body.append('file', uploadImage);
    const response = await fetch('/api/upload', {
      method: 'POST',
      body,
    });
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
              onChange={(e) => setPost({ ...post, price: e.target.value })}
              placeholder="price"
            />
          </Grid>
          <Grid item>
            <Input
              required
              fullWidth
              type="text"
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
