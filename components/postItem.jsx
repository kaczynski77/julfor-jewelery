import { Box, Button, Paper, Typography } from '@mui/material';

const PostItem = (props) => {
  console.log(props);
  return (
    <Box
      sx={{
        display: 'flex',

        padding: 2,
        borderColor: 'primary',
      }}
    >
      <Paper sx={{ width: 1 / 2, margin: '0 auto' }}>
        <Typography component="h1" variant="h5">
          {props.post.id} {props.post.title}
        </Typography>
        <Typography component="p" variant="h6">
          {props.post.body}
        </Typography>
      </Paper>
      <Button variant="contained">Delete</Button>
    </Box>
  );
};

export default PostItem;
