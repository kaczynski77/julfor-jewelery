import { Box, Typography, Grid, Link, Card, CardMedia } from '@mui/material';
import { indigo } from '@mui/material/colors';
export default function MainServices() {
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
    <Box sx={{ textAlign: 'center' }}>
      
      <Grid
        container
        spacing={2}
        sx={{
          marginTop: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {servicesData.map((data) => (
          <Grid key={data.name} item xs={12} lg={4}>
            <Link
              sx={{
                textDecoration: 'none',
                width: 'inherit',
                height: 'inherit',
              }}
              href={data.href}
              color="inherit"
            >
              <Card sx={{ position: 'relative' }}>
                <Box
                  sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    zIndex: 2,
                    opacity: '1',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      height: '100%',
                      textAlign: 'center',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: '1',
                    }}
                  >
                    <Typography
                      variant="h4"
                      color="white"
                      sx={{
                        textTransform: 'uppercase',
                        fontWeight: 700,
                      }}
                    >
                      {data.name}
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backgroundColor: indigo[100],
                    opacity: '0.1',
                    zIndex: 1,
                  }}
                ></Box>

                <CardMedia
                  component="img"
                  height="345"
                  image={data.image}
                  alt="Paella dish"
                  sx={{ opacity: '0.98' }}
                />
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
