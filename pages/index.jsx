import { Container, Typography, Box } from '@mui/material';

import Layout from '../components/layout';
import { grey } from '@mui/material/colors';

import MainCategories from '../components/mainCategories';
import MainHits from '../components/mainHits';
import MainServices from '../components/mainServices';
import MainBanner from '../components/mainBanner';
import { borderLeft } from '@mui/system';

export default function Home() {
  return (
    <Layout>
      <Container xs={{ display: 'none' }}>
        <Box sx={{ paddingTop: { xs: 0, xl: 8 }, textAlign: 'center' }}>
          <Typography
            variant="h3"
            sx={{
              textTransform: 'uppercase',
              fontSize: 28,
              fontWeight: 'bold',
            }}
          >
            украшения ручной работы
          </Typography>
        </Box>
        <Box
          sx={{
            paddingTop: { xs: 2, xl: 1 },
            textAlign: { xs: 'center', sm: 'center' },
            maxWidth: { xs: 400, sm: 680 },
            margin: '0 auto',
          }}
        >
          <Typography
            sx={{ color: grey[900], fontSize: 14, lineHeight: 1 }}
            variant="overline"
          >
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
