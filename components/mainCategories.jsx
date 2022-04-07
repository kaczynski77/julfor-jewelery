import { Card, Box, CardMedia, Grid, Link, Typography } from '@mui/material';
import { indigo } from '@mui/material/colors';
export default function MainCategories() {
  const categoryData = [
    { name: 'Cерьги', href: '/earrings', image: '/images/earrings.jpg' },
    {
      name: 'Колье и Подвески',
      href: '/pendants',
      image: '/images/pendants.jpg',
    },
    { name: 'Браслеты', href: '/bracelets', image: '/images/bracelets.jpg' },
    { name: 'Кольца', href: '/rings', image: '/images/rings.jpg' },
    {
      name: 'Акссесуары',
      href: '/accessories',
      image: '/images/accessories.jpg',
    },
    {
      name: 'Подарочные сертификаты',
      href: '/giftcard',
      image: '/images/gifts.jpg',
    },
  ];
  return (
    <Grid
      container
      spacing={2}
      sx={{
        marginTop: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {categoryData.map((data) => (
        <Grid item xs={12} lg={6}>
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
                  <Box
                    sx={{
                      borderRadius: '10px',
                      paddingLeft: 2,
                      paddingRight: 2,
                    }}
                  >
                    <Typography
                      variant="h5"
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
  );
}
