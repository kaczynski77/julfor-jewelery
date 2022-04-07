import { Container, Checkbox, Button, CssBaseline } from '@mui/material';
import Footer from './footer';
import Header from './header';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange, purple } from '@mui/material/colors';

const Layout = ({ children }) => {
  const theme = createTheme({
    status: {
      danger: orange[700],
    },
    pallete: {
      primary: {
        // Purple and green play nicely together.
        main: purple[500],
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#11cb5f',
      },
    },
  });

  const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
    color: theme.status.danger,
    '&.Mui-checked': {
      color: theme.status.danger,
    },
  }));
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline>
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
        </CssBaseline>
      </ThemeProvider>
    </>
  );
};

export default Layout;
