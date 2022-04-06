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
import Image from 'next/image';

export default function Home() {
  const categoryData = [
    { name: 'Cерьги', href: '/earrings', image: '/images/earrings.jpg' },
    {
      name: 'Колье/Подвески',
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
            Изящество, легкость, неповторимый стиль наших украшений. Самые
            современные тренды и высокое качество. Все это помогает вам создать
            женственный образ.
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
                <Grid item xs={12} lg={6} sx={{ justifyContent: 'center' }}>
                  <Link
                    sx={{ textDecoration: 'none' }}
                    href={data.href}
                    color="inherit"
                  >
                    <Card>
                      <CardActions disableSpacing>
                        <Box
                          sx={{
                            margin: '0 auto',
                          }}
                        >
                          <Typography variant="h6">{data.name}</Typography>
                        </Box>
                      </CardActions>
                      <CardMedia
                        component="img"
                        height="345"
                        image={data.image}
                        alt="Paella dish"
                      />
                      <CardContent>
                        <Typography variant="body2" color={grey[500]}>
                          This impressive paella is a perfect party dish and a
                          fun meal to cook together with your guests. Add 1 cup
                          of frozen peas along with the mussels, if you like.
                        </Typography>
                      </CardContent>
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
