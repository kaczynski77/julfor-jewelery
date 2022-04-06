import React from 'react';
import Head from 'next/head';
import {
  AppBar,
  Box,
  Container,
  Grid,
  Toolbar,
  Typography,
  Link,
} from '@mui/material';
import App from '../pages/_app';

export default function Header() {
  const linksData = [
    { name: 'Каталог', href: '/catalog' },
    { name: 'На заказ', href: '/custom' },
    { name: 'Реставрация', href: '/restore' },
    { name: 'Покупателям', href: '/customer' },
    { name: 'О Бренде', href: '/brand' },
    { name: 'Контакты', href: '/contact' },
  ];

  return (
    <>
      <Head>
        <title>Julfour Jewelery</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <Box>
        <Box
          position="static"
          sx={{ textAlign: 'center', paddingTop: 6, paddingBottom: 3 }}
        >
          <Box>
            <Typography>СКИДКА ПО ПРОМОКОДУ JUL5 5%</Typography>
          </Box>
        </Box>
        <Grid
          container
          sx={{
            marginBottom: { xs: 6, sm: 3 },
            width: '100',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          <Grid
            item
            sx={{
              width: { md: 1 / 3, xs: 1 / 2 },
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}
          >
            <Box>
              <Typography>TG</Typography>
            </Box>
            <Box>
              <Typography>WS</Typography>
            </Box>
            <Box>
              <Typography>VK</Typography>
            </Box>
          </Grid>
          <Grid
            item
            sx={{
              border: '2px solid black',
              padding: 3,
              marginTop: { xs: 3 },

              width: { md: 1 / 3 },
              display: 'flex',
              flexDirection: 'column',
              justifyItems: 'center',
              alignItems: 'center',

              order: { xs: '3', md: '0' },
            }}
          >
            <Typography variant="h3">JULFOUR</Typography>
            <Typography variant="h4">JEWELERY</Typography>
          </Grid>

          <Grid
            item
            sx={{
              width: { md: 1 / 3, xs: 1 / 2 },
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
            }}
          >
            <Typography>+7 (995) 777-777</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          sx={{
            justifyContent: 'space-between',
            display: { xs: 'none', xl: 'flex' },
          }}
        >
          {linksData.map((data) => (
            <Grid item xs="auto">
              <Box>
                <Link href={data.href} color="inherit">
                  {data.name}
                </Link>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
