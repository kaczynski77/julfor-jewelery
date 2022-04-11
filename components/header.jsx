import React from 'react';
import Head from 'next/head';
import {
  Button,
  Box,
  Grid,
  Typography,
  Link,
  CardMedia,
  Card,
  Container,
} from '@mui/material';

import PhoneIcon from '@mui/icons-material/Phone';

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
        <title>Julfour Jewelry</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <Box>
        <Box
          position="static"
          sx={{
            textAlign: 'center',

            paddingBottom: { lg: 0, xs: 2 },
          }}
        ></Box>
        <Grid
          container
          sx={{
            marginBottom: { xs: 0, sm: 3, xl: 0 },
            width: '100',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Grid
            item
            sx={{
              width: { md: 1 / 3, xs: 1 / 2 },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box sx={{ marginRight: 6 }}>
              <CardMedia
                component="img"
                height="25"
                title=""
                src="/./images/icon-tg.svg"
              />
            </Box>
            <Box sx={{ marginRight: 6 }}>
              <CardMedia
                component="img"
                height="25"
                title=""
                src="/./images/icon-wsapp.svg"
              />
            </Box>
            <Box>
              <CardMedia
                component="img"
                height="25"
                title=""
                src="/./images/icon-vk.svg"
              />
            </Box>
          </Grid>
          <Grid
            item
            sx={{
              padding: 3,
              marginTop: { xs: 0 },
              width: '100%',
              maxWidth: '320px',
              display: 'flex',
              flexDirection: 'column',
              justifyItems: 'center',
              alignItems: 'center',

              order: { xs: '3', md: '0' },
            }}
          >
            <Typography variant="h1" sx={{ fontSize: 70, fontWeight: 700 }}>
              JULFOUR
            </Typography>
            <Typography variant="h1" sx={{ fontWeight: 700, fontSize: 54 }}>
              JEWELRY
            </Typography>
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
            <PhoneIcon sx={{ height: '25px' }} />
            <Typography sx={{ marginLeft: 2, fontWeight: 700 }}>
              +7 (995) 777-7777
            </Typography>
          </Grid>
        </Grid>
        <Container lg>
          <Grid
            container
            direction="row"
            sx={{
              margin: '0',
              justifyContent: 'space-between',
              display: { xs: 'none', xl: 'flex' },
            }}
          >
            {linksData.map((data) => (
              <Grid key={data.name} item xs="auto">
                <Box>
                  <Link sx={{ textDecoration: 'none' }} href={data.href}>
                    <Typography sx={{ color: 'black', fontWeight: 700 }}>
                      {data.name}
                    </Typography>
                  </Link>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
