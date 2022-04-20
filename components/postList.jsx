import PostItem from './postItem';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';

const PostList = ({ posts }) => {
  return (
    <Box
      elevation={1}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      {posts.map((post, index) => (
        <PostItem key={post.id} number={index + 1} post={post} />
      ))}
    </Box>
  );
};

export default PostList;
