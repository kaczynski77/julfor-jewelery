import { Paper, Typography } from '@mui/material';
import PostItem from './postItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Box } from '@mui/system';

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return (
      <Box>
        <Typography
          variant="h3"
          sx={{
            textAlign: 'center',
            marginTop: 10,
            textTransform: 'uppercase',
          }}
        >
          No posts found
        </Typography>
      </Box>
    );
  }
  return (
    <Paper
      elevation={1}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {posts.map((post, index) => (
        <PostItem
          key={post.id}
          remove={remove}
          number={index + 1}
          post={post}
        />
      ))}
    </Paper>
  );
};

export default PostList;
