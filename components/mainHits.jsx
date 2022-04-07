import { Box, Button, Typography } from '@mui/material';

export default function MainHits() {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>
        Хиты Продаж
      </Typography>
      <Button сolor="secondary">X</Button>
    </Box>
  );
}
