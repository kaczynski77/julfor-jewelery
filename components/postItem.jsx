import { Box, Button, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import Image from 'next/image';

const PostItem = ({ post, remove }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {id};
    console.log(body);

    try {
      const response = await fetch('/api/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const responseData = await response.json();
      if (response.status !== 200) {
        console.log('something went wrong');
        //set an error banner here
      } else {
        console.log('form submitted successfully !!!');
        //window.location.reload(false);
        //set a success banner here
        setId(responseData.id);
        remove(post);
      }
      //check response, if success is false, dont take them to success page
    } catch (error) {
      console.log('there was an error submitting', error);
    }
  };

  const [id, setId] = useState(post.id);
  const [category, setCategory] = useState(post.category);
  const [description, setDescription] = useState(post.description);
  const [image, setImage] = useState(post.image);
  const [price, setPrice] = useState(post.price);
  const [title, setTitle] = useState(post.title);


  

  const [uploadImage, setUploadImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];65

      setUploadImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
    //
  };

  const uploadToServer = async (event) => {
    const body = new FormData();
    console.log('file', uploadImage);
    body.append('file', uploadImage);
    body.append('id', post.id );
    console.log('id', post.id);
    const response = await fetch('/api/upload', {
      method: 'POST',
      body,
    });
    
    if (response.status == 200) {
      console.log('true')
      const responseData = await response.json();
      const updateId = post.id;
      const path = responseData.dbPath;
      const body = { updateId, path};
      

      try {
        const response = await fetch('/api/update', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
        const responseData = await response.json();
        if (response.status !== 200) {
          console.log('something went wrong');
          //set an error banner here
        } else {
          console.log('form submitted successfully !!!');
          //window.location.reload(false);
          //set a success banner here
          setImage(path);
          console.log(image);
        }
        //check response, if success is false, dont take them to success page
      } catch (error) {
        console.log('there was an error submitting', error);
      }


     
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',

        padding: 2,
        borderColor: 'primary',
        alignItems: 'center',
      }}
    >
      {image == null && (
        <Box width={1 / 4} sx={{ overflow: 'hidden' }}>
          <div>
            <div>
            <Box width={1 / 4}  height={200} sx={{ overflow: 'hidden', position: 'relative' }}>
    
              </Box>

              

              <input type="file" name="uploadImage" onChange={uploadToClient} />
              <button
                className="btn btn-primary"
                type="submit"
                onClick={uploadToServer}
              >
                Сохранить 
              </button>
            </div>
          </div>
        </Box>
      )}

      {image !== null && (
        <Box width={1 / 4}  height={200} sx={{ overflow: 'hidden', position: 'relative' }}>
        <Image
    alt='postimg'
    src={image}
    layout='fill'
    objectFit='contain'
  />
        </Box>
      )}

      <Paper sx={{ width: 2 / 5, margin: '0 auto', padding: 2 }}>
        <Typography component="h1" variant="h6" sx={{ marginBottom: 2 }}>
          {post.title}
        </Typography>
        <Typography component="p" variant="body" sx={{ marginBottom: 4 }}>
          {post.category}
        </Typography>
        <Typography component="p" variant="body" sx={{ marginBottom: 4 }}>
          {post.description}
        </Typography>
        <Typography component="p" variant="body" sx={{ marginBottom: 4 }}>
          {post.price}
        </Typography>
      </Paper>
      <Box sx={{ width: 1 / 5 }}>
        <form action="#" method="POST" onSubmit={(e) => handleSubmit(e)}>
          <Button fullWidth type="submit" variant="outlined">
            Редактировать
          </Button>
          <Button
            color="secondary"
            fullWidth
            type="submit"
            onClick={() => setId(post.id)}
            variant="outlined"
          >
            Удалить
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default PostItem;
