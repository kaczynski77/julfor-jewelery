import { Container } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import Footer from './footer';
import Header from './header';

const Layout = ({ children }) => {
  return (
    <>
      <Container lg sx={{ padding: { xs: 0 } }}>
        <Header />
        <Container sx={{ minHeight: '80vh' }}>{children}</Container>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
