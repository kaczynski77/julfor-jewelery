import { Container, Typography, Box } from '@mui/material';
import Button from '@mui/material/Button';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <Container xs={{ display: 'none' }}>
        <Box sx={{ paddingTop: { xs: 3, xl: 9 }, textAlign: 'center' }}>
          <Typography variant="h4">Украшения ручной работы</Typography>
        </Box>
        <Box
          sx={{
            paddingTop: { xs: 3, xl: 6 },
            textAlign: { xs: 'left', sm: 'center' },
          }}
        >
          <Typography variant="h6">
            Изящество, легкость, неповторимый стиль наших украшений. Самые
            современные тренды и высокое качество. Все это помогает вам создать
            женственный образ.
          </Typography>
        </Box>
      </Container>
    </Layout>
  );
}
