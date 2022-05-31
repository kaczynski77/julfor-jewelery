import React from 'react';
import { useRouter } from 'next/router';
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
import  prisma  from '../api/lib/db'


export const getServerSideProps = async () => {
    const items = await prisma.item.findMany();
    return {
      props: {
        listDb: items,
      },
    };
  };


export default function Item() {
  const router = useRouter();
  const {slug} = router.query;
  const product = data.products.find ((a) => a.slug === slug);
  if (!product) {
    return <div>Товар не найден</div>
  }
return (<div>{product.name}</div>)
}