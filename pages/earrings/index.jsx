import { Box, Container, Grid, Typography } from '@mui/material';
import Layout from '../../components/layout';
import { grey } from '@mui/material/colors';
import  prisma  from '../api/lib/db'
import ItemCard from '../../components/ItemCard';
import { useState } from 'react';

export const getServerSideProps = async () => {
    const items = await prisma.item.findMany();
    return {
      props: {
        listDb: items,
      },
    };
  };



export default function Home({listDb}) {

  
   
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
          <Grid container xs={12} direction="row">
          
          {listDb.map(item =>
            <Grid item xs={6} lg={3}>
          <ItemCard key={item.id} item={item}/>
          </Grid>
          )}
          </Grid>
        </Container>
      </Layout>
    );}