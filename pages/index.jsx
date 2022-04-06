import { Container, Typography, Box, Grid, Link, Card } from '@mui/material';
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
        <Box sx={{ paddingTop: { xs: 2, xl: 9 }, textAlign: 'center' }}>
          <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>
            украшения ручной работы
          </Typography>
        </Box>
        <Box
          sx={{
            paddingTop: { xs: 2, xl: 3 },
            textAlign: { xs: 'center', sm: 'center' },
          }}
        >
          <Typography sx={{ color: grey[400] }} variant="overline">
            Изящество, легкость, неповторимый стиль наших украшений. Самые
            современные тренды и высокое качество. Все это помогает вам создать
            женственный образ.
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{
              justifyContent: 'space-between',
              marginTop: 6,
            }}
          >
            {categoryData.map((data) => (
              <Grid item xs={12} sm={6} sx={{ justifyContent: 'center' }}>
                <Link href={data.href} color="inherit">
                  <Card
                    sx={{
                      height: 350,
                      width: 300,
                      margin: '0 auto',
                    }}
                  >
                    <Image height="350" width="350" src={data.image}></Image>
                    <Box sx={{ marginTop: 1 }}>
                      <Typography variant="body">{data.name}</Typography>
                    </Box>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
}
