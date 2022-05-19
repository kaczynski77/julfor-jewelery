import { PrismaClient } from '@prisma/client';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Container, Grid, Typography, Box, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import PostForm from '../../components/PostForm';
import PostList from '../../components/postList';
import MyModal from '../../components/UI/MyModal/MyModal';

export const getServerSideProps = async () => {
  const prisma = new PrismaClient();
  const allItems = await prisma.item.findMany();

  return {
    props: {
      itemList: allItems,
    },
  };
};

export default function Admin(pageProps) {
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };

  const initList = {
    list: [...pageProps.itemList],
  };

  const [modal, setModal] = useState(false);

  const [postsDb, setPostsDb] = useState([]);

  const createPost = (newPost) => {
    setPostsDb([...postsDb, newPost]);
  };

  const removePost = (post) => {
    setPostsDb(postsDb.filter(p => p.id !== post.id))
  }

  useEffect(() => {
    const fetchData = async () => {
      const body = 'show-all';
      try {
        const response = await fetch('/api/show-all', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
        const responseData = await response.json();

        if (response.status !== 200) {
          console.log('something went wrong');
          //set an error banner here
        } else {
          console.log('showing all from db');

          setPostsDb(responseData);

          //set a success banner here
        }
        //check response, if success is false, dont take them to success page
      } catch (error) {
        console.log('there was an error submitting', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Julfour Jewelry</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <Container>
        <Grid direction="row" sx={{ justifyContent: 'center' }} container>
          <Grid item xs={12}>
            {/*  */}
            <Button
              fullWidth
              variant="outlined"
              onClick={() => setModal(true)}
              sx={{ marginTop: 2 }}
            >
              Добавить товар
            </Button>
            <Grid
              direction="row"
              sx={{ justifyContent: 'center', textAlign: 'center' }}
              container
            >
              <Grid item xs={2.4}>
                <Button>Все</Button>
              </Grid>
              <Grid item xs={2.4}>
                <Button>Колье, чокеры</Button>
              </Grid>
              <Grid item xs={2.4}>
                <Button>Браслеты</Button>
              </Grid>
              <Grid item xs={2.4}>
                <Button>Серьги</Button>
              </Grid>
              <Grid item xs={2.4}>
                <Button>Кольца</Button>
              </Grid>
            </Grid>
            <Box sx={{ marginBottom: 2, textAlign: 'center', width: '100%' }}>
              <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
              </MyModal>
            </Box>

            <PostList remove={removePost} posts={postsDb} />
            {/*  */}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
