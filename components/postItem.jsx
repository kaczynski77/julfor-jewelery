import { Box, Button, Paper, Typography } from '@mui/material';

const PostItem = (props) => {
  // console.log(props);

  return (
    <Box
      sx={{
        display: 'flex',

        padding: 2,
        borderColor: 'primary',
      }}
    >
      <Paper sx={{ width: 1 / 2, margin: '0 auto', padding: 2 }}>
        <Typography component="h1" variant="h6" sx={{ marginBottom: 2 }}>
          {props.number} {props.post.title}
        </Typography>
        <Typography component="p" variant="body" sx={{ marginBottom: 4 }}>
          {props.post.body}
        </Typography>
        <Button
          onClick={() => props.remove(props.post)}
          variant="outlined"
          fullWidth
        >
          Delete
        </Button>
      </Paper>
    </Box>
  );
};

export default PostItem;
