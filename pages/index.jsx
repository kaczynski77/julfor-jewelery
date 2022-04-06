import {
  Container,
  Typography,
  Box,
  Grid,
  Link,
  Card,
  Paper,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
} from '@mui/material';
import Button from '@mui/material/Button';
import Layout from '../components/layout';
import { grey } from '@mui/material/colors';
import { indigo } from '@mui/material/colors';
import Image from 'next/image';

export default function Home() {
  const categoryData = [
    { name: 'Cерьги', href: '/earrings', image: '/images/earrings.jpg' },
    {
      name: 'Колье и Подвески',
      href: '/pendants',
      image: '/images/pendants.jpg',
    },
    { name: 'Браслеты', href: '/bracelets', image: '/images/bracelets.jpg' },
    { name: 'Кольца', href: '/rings', image: '/images/rings.jpg' },
    {
      name: 'Акссесуары',
      href: '/accessories',
      image: '/images/accessories.jpg',
    },
    {
      name: 'Подарочные сертификаты',
      href: '/giftcard',
      image: '/images/gifts.jpg',
    },
  ];
  return (
    <Layout>
      <Container xs={{ display: 'none' }}>
        <Box sx={{ paddingTop: { xs: 2, xl: 6 }, textAlign: 'center' }}>
          <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>
            украшения ручной работы
          </Typography>
        </Box>
        <Box
          sx={{
            paddingTop: { xs: 2, xl: 1 },
            textAlign: { xs: 'center', sm: 'center' },
          }}
        >
          <Typography sx={{ color: grey[500] }} variant="overline">
            Наши украшения раскрывают женственность и привлекательность Для
            глубоких, чувственных, ярких и нежных
          </Typography>
          <Box>
            <Grid
              container
              spacing={1}
              sx={{
                marginTop: 3,
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0 auto',
              }}
            >
              {categoryData.map((data) => (
                <Grid
                  item
                  xs={12}
                  lg={6}
                  sx={{ justifyContent: 'center', marginTop: 1 }}
                >
                  <Link
                    sx={{
                      textDecoration: 'none',
                      width: 'inherit',
                      height: 'inherit',
                    }}
                    href={data.href}
                    color="inherit"
                  >
                    <Card sx={{ position: 'relative' }}>
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
                            justifyContent: 'center',
                            alignItems: 'center',
                            opacity: '1',
                          }}
                        >
                          <Typography
                            variant="h4"
                            color="white"
                            sx={{ textTransform: 'uppercase' }}
                          >
                            {data.name}
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          position: 'absolute',
                          width: '100%',
                          height: '100%',
                          backgroundColor: indigo[800],
                          opacity: '0.25',
                          zIndex: 1,
                        }}
                      ></Box>

                      <CardMedia
                        component="img"
                        height="345"
                        image={data.image}
                        alt="Paella dish"
                      />
                    </Card>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}
