import {
  Container,
  Checkbox,
  Button,
  CssBaseline,
  Typography,
  Box,
  Grid,
} from '@mui/material';
import Head from 'next/head';
import Footer from './footer';
import Header from './header';
import MyModal from './UI/MyModal/MyModal';
import Upload from './upload';

const AdminLayout = ({ pageProps }) => {
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

      <Container>
        <Grid sx={{ justifyContent: 'center' }} container>
          <Grid item xs={6}>
            <Typography>Кабинет</Typography>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: 'right' }}>
            <Typography>Выход</Typography>
          </Grid>
          <Grid item xs={12}>
            <Upload pageProps={pageProps} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AdminLayout;
