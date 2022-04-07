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
import MainCategories from '../components/mainCategories';
import MainHits from '../components/mainHits';
import MainServices from '../components/mainServices';
import MainBanner from '../components/mainBanner';

export default function Home() {
  const servicesData = [
    {
      name: 'На заказ',
      description: 'Создаём украшения по вашим эскизам или фото',
      image: '/images/custom.jpg',
    },
    {
      name: 'Реставрация',
      description: 'Даём любимым украшения вторую жизнь',
      image: '/images/restore.jpg',
    },
    {
      name: 'Мастер классы',
      description: 'Создаём украшения по вашим эскизам или фото',
      image: '/images/pendants.jpg',
    },
  ];

  return (
    <Layout>
      <Container xs={{ display: 'none' }}>
        <Box sx={{ paddingTop: { xs: 0, xl: 4 }, textAlign: 'center' }}>
          <Typography variant="h4" sx={{ textTransform: 'uppercase' }}>
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
        </Box>
        <MainCategories />
        <MainBanner />
        <MainHits />
        <MainServices />
      </Container>
    </Layout>
  );
}
