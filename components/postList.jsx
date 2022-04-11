import { Paper, Typography } from '@mui/material';
import PostItem from './postItem';

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
      <Typography
        variant="h3"
        component="h1"
        sx={{ textAlign: 'center', fontWeight: 700 }}
      >
        {title}
      </Typography>
      {posts.map((post, index) => (
        <PostItem
          remove={remove}
          number={index + 1}
          key={post.id}
          post={post}
        />
      ))}
    </Paper>
  );
};

export default PostList;
