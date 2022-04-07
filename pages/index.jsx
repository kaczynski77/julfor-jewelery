import { Container, Typography, Box } from '@mui/material';

import Layout from '../components/layout';
import { grey } from '@mui/material/colors';

import MainCategories from '../components/mainCategories';
import MainHits from '../components/mainHits';
import MainServices from '../components/mainServices';
import MainBanner from '../components/mainBanner';

export default function Home() {
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
