import { Box, Card, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { indigo } from '@mui/material/colors';

export default function MainBanner() {
  const bannerData = [
    {
      name: 'JULFOUR SPRING COLLECTION',
      description: 'Новая линейка украшений',
      image: '/images/banner.jpg',
    },
  ];
  const bname = bannerData[0].name;
  return (
    <Card sx={{ position: 'relative', marginTop: 2, marginBottom: 4 }}>
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: 2,
          opacity: '1',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            height: '100%',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: '1',
          }}
        >
          {' '}
          <Box>
            <Typography
              variant="h4"
              color="white"
              sx={{ textTransform: 'uppercase' }}
            >
              JULFOUR SPRING COLLECTION
            </Typography>
            <Typography
              variant="h5"
              color="white"
              sx={{ textTransform: 'uppercase' }}
            >
              Новая линейка украшений
            </Typography>
          </Box>
          <Box
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backgroundColor: indigo[800],
              opacity: '0.1',
              zIndex: 9999,
            }}
          ></Box>
        </Box>
      </Box>
      <CardMedia
        component="img"
        height="345"
        image={bannerData[0].image}
        alt="Paella dish"
        sx={{ opacity: '0.99' }}
      />
    </Card>
  );
}
