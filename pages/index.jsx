import { Container, Typography, Box } from '@mui/material';
import Button from '@mui/material/Button';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <Container xs={{ display: 'none' }}>
        <Box sx={{ paddingTop: { xs: '3', xl: '6' }, textAlign: 'center' }}>
          <Typography variant="h4">Украшения ручной работы</Typography>
        </Box>
      </Container>
    </Layout>
  );
}
