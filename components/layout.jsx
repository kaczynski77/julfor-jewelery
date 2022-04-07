import { Container, Checkbox, Button, CssBaseline } from '@mui/material';
import Footer from './footer';
import Header from './header';

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          padding: { xs: 0 },

          background:
            'linear-gradient(90deg, #fffcf7, #fffbf7, #fffaf7, #fff9f9, #fff8fb, #fef8fd, #fbf8fe, #f7f8ff)',

          width: '100vw',
        }}
      >
        <Header />

        <Container
          sx={{
            minHeight: '80vh',
          }}
        >
          {children}
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
