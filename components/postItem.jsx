import { Box, Button, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';

import Image from 'next/image';



const PostItem = ({ post }) => {
  // console.log(props);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { id };
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
        console.log(id);
      }
      //check response, if success is false, dont take them to success page
    } catch (error) {
      console.log('there was an error submitting', error);
    }
  };

  const [id, setId] = useState('');

  const [uploadImage, setUploadImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

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
      console.log(responseData.newPath)
      const updateId = post.id;
      const path = responseData.newPath;
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
          setId(responseData.id);
          console.log(id);
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
      {post.image == null && (
        <Box width={1 / 4} sx={{ overflow: 'hidden' }}>
          <div>
            <div>
              <Box height={2 / 5}>
                <img src={createObjectURL} />
              </Box>

              <input type="file" name="uploadImage" onChange={uploadToClient} />
              <button
                className="btn btn-primary"
                type="submit"
                onClick={uploadToServer}
              >
                Send to server
              </button>
            </div>
          </div>
        </Box>
      )}

      {post.image !== null && (
        <Box width={1 / 4}  height={200} sx={{ overflow: 'hidden', position: 'relative' }}>
        <Image
    alt='Mountains'
    src={post.image}
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
