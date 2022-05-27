import { Box, Container, Typography } from '@mui/material';
import Layout from '../../components/layout';
import { grey } from '@mui/material/colors';
import  prisma  from '../api/lib/db'

export const getServerSideProps = async () => {
    const itemList = await prisma.item.findMany();
    return {
      props: {
        itemList: {itemList},
      },
    };
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
              СЕРЬГИ
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
          
        </Container>
      </Layout>
    );}