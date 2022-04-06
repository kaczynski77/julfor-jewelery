import { Container, Typography, Box } from '@mui/material';
import Button from '@mui/material/Button';
import Layout from '../components/layout';
import { grey } from '@mui/material/colors';

export default function Home() {
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
        </Box>
      </Container>
    </Layout>
  );
}
