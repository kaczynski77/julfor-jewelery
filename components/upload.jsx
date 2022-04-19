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

const Upload = ({ itemList, pageProps }) => {
  const initList = {
    list: [...pageProps.itemList],
  };

  const [posts, setPosts] = useState(initList);

  const [modal, setModal] = useState(false);

  return (
    <>
      <Button fullWidth variant="outlined" onClick={() => setModal(true)}>
        Create
      </Button>
      <Box sx={{ marginBottom: 2, textAlign: 'center', width: '100%' }}>
        <MyModal visible={modal} setVisible={setModal}>
          <PostForm />
        </MyModal>
      </Box>

      <PostList posts={posts} />
    </>
  );
};

export default Upload;
