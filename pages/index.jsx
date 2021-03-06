import { Container, Typography, Box } from '@mui/material';

import Layout from '../components/layout';
import { grey } from '@mui/material/colors';

import MainCategories from '../components/mainCategories';
import MainHits from '../components/mainHits';
import MainServices from '../components/mainServices';
import MainBanner from '../components/mainBanner';
import { borderLeft } from '@mui/system';

import { PrismaClient } from '@prisma/client';

export const getServerSideProps = async () => {
  const prisma = new PrismaClient();
  const items = await prisma.item.findMany();

  return { props: { items } };
};

export default function Home() {
  return (
    <Layout>
      <Container xs={{ display: 'none' }}>
        <Box sx={{ paddingTop: { xs: 0, xl: 5 }, textAlign: 'center' }}>
          <Typography
            variant="h3"
            sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}
          >
            Украшения ручной работы
          </Typography>
        </Box>
        <Box
          sx={{
            paddingTop: { xs: 2, xl: 2 },
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
        {/* <MainBanner />
        <MainHits /> */}
        <MainServices />
      </Container>
    </Layout>
  );
}
