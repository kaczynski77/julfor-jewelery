import React from 'react';
import { useState } from 'react';
import {
  Button,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import NextLink from 'next/link';


export default function ItemCard({item}) {
    
console.log(item.id);
  return ( <CardActionArea >
   <NextLink href={`/earrings/${item.id}`} passHref>
    <CardContent>

    <CardMedia
                component="img"
                height="250"
                image={item.image}
                alt="Paella dish"
                sx={{ opacity: '0.98' }}
              />
      <Box>
        <Typography align="center">{item.title}</Typography>
      </Box>
      <Box>
        <Typography align="center">{item.price} ₽  </Typography>
      </Box>
      
    </CardContent>
   
      
    </NextLink>
  </CardActionArea>)
}