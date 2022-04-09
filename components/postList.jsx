import { Typography } from '@mui/material';
import PostItem from './postItem';

const PostList = ({ posts, title }) => {
  return (
    <div>
      <Typography
        variant="h3"
        component="h1"
        sx={{ textAlign: 'center', fontWeight: 700 }}
      >
        {title}
      </Typography>
      {posts.map((post, index) => (
        <PostItem number={index + 1} key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
