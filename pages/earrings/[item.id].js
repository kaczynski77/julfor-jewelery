import React from 'react';
import Layout from '../../components/layout';
import { useState } from 'react';
import {
  Button,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import NextLink from 'next/link';

export async function getServerSideProps() {
  const response = await fetch('http:localhost:3000/api/showlots');
  const lots = await response.json();

  return {
    props: {
      data: lots,
    },
  };
}

export default function Item({ data }) {
  const [lots, setLots] = useState(data);
  return lots.map((item) => (
    <CardActionArea key={item.id}>
      <CardContent>
        <Box>
          <Typography variant="caption" color="text.secondary">
            Название лота:
          </Typography>
          <Typography>{item.title}</Typography>
        </Box>
        <Box>
          <Typography variant="caption" color="text.secondary">
            Цена:
          </Typography>
          <Typography>{item.price} </Typography>
        </Box>
        <Box>
          <Typography variant="caption" color="text.secondary">
            Описание:
          </Typography>
          <Typography>{item.description}</Typography>
        </Box>
      </CardContent>
      <NextLink href={`/lots/${item.id}`} passHref>
        <Button size="small" color="primary" variant="outlined">
          Подробнее
        </Button>
      </NextLink>
    </CardActionArea>
  ));
}