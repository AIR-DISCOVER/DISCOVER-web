// icons
// @mui
import { styled } from '@mui/material/styles';
import { Grid, Stack, Container, Typography } from '@mui/material';
// components
import { Image } from '../../../components';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(15, 0),
  [theme.breakpoints.up('md')]: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
  },
}));

// ----------------------------------------------------------------------

export default function MarketingLandingHero({ pack }) {
  return (
    <RootStyle>
      <Container>
        <Grid container columnSpacing={10} justifyContent="space-between" alignItems="center" direction={pack?.inverse && "row-reverse"}>
          <Grid item xs={12} md={6} lg={5} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Stack spacing={5}>
              <Typography variant="overline" sx={{ color: 'primary.main' }}>
                {pack?.overline}
              </Typography>

              <Typography variant="h1">{pack?.title}</Typography>

              <Typography sx={{ color: 'text.secondary' }}>
                {pack?.description}
              </Typography>

              {/* <Stack
                direction={{ xs: 'column', sm: 'row' }}
                justifyContent={{ xs: 'center', md: 'unset' }}
                spacing={3}
              >
                <Button variant="contained" size="large">
                  Try For Free
                </Button>

                <Button
                  disableRipple
                  color="inherit"
                  size="large"
                  startIcon={
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        display: 'flex',
                        borderRadius: '50%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: (theme) => `solid 2px ${alpha(theme.palette.primary.main, 0.24)}`,
                      }}
                    >
                      <Iconify
                        icon={playIcon}
                        sx={{ width: 24, height: 24, color: 'primary.main' }}
                      />
                    </Box>
                  }
                  sx={{
                    px: 0,
                    '&:hover': { bgcolor: 'transparent' },
                  }}
                >
                  See Our Work
                </Button>
              </Stack> */}
            </Stack>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            lg={7}
            sx={{
              display: { xs: 'none', md: 'block' },
            }}
          >
            <Image
              alt="landing-main"
              src={pack.landing_img ? pack.landing_img : "https://zone-assets-api.vercel.app/assets/illustrations/illustration_marketing_market.svg"}
            />
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
