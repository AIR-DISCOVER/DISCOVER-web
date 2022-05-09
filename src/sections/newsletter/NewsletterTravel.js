// icons
import chevronRight from '@iconify/icons-carbon/chevron-right';
// @mui
import { styled, alpha } from '@mui/material/styles';
import {
  Grid,
  Stack,
  Button,
  Container,
  Typography,
  FilledInput,
  InputAdornment,
} from '@mui/material';
// utils
import cssStyles from '../../utils/cssStyles';
// components
import { Iconify } from '../../components';
import NextLink from 'next/link';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  ...cssStyles(theme).bgImage({
    url: 'https://zone-assets-api.vercel.app/assets/images/travel/travel_newsletter.jpg',
    startColor: `${alpha(theme.palette.grey[900], 0.88)}`,
    endColor: `${alpha(theme.palette.grey[900], 0.88)}`,
  }),
  [theme.breakpoints.up('md')]: {
    ...cssStyles(theme).bgImage({
      direction: 'right',
      url: 'https://zone-assets-api.vercel.app/assets/images/travel/travel_newsletter.jpg',
      startColor: `${alpha(theme.palette.grey[900], 0)} 0%`,
      endColor: `${alpha(theme.palette.grey[900], 1)} 70%`,
    }),
    backgroundPosition: 'center, left ',
    backgroundSize: 'cover, auto 100%',
  },
}));

// ----------------------------------------------------------------------

export default function NewsletterTravel({ title, comment, link, url }) {

  return (
    <RootStyle>
      <Container>
        <Grid container spacing={8} justifyContent="flex-end">
          <Grid item xs={12} md={8}>
            <Grid container columns={8}
              spacing={8}
              sx={{
                color: 'common.white',
                textAlign: { xs: 'center', md: 'left' },
                minHeight: '20rem'
              }}
            >
              <Grid item xs={8} md={4}>
                <Typography variant="h3">{title[0]}</Typography>
                <Typography>
                  {comment[0]}
                </Typography>
                <NextLink href={url[0]} passHref>
                  <Typography sx={{ cursor: 'pointer', textDecoration: 'underline 1px', fontWeight: 'bold', '&:hover': { fontWeight: 'bolder', textDecoration: 'underline 2px' }, mt: 4 }}>
                    {link[0]}
                  </Typography>
                </NextLink>
              </Grid>
              <Grid item xs={8} md={4}>
                <Typography variant="h3">{title[1]}</Typography>
                <Typography>
                  {comment[1]}
                </Typography>
                <NextLink href={url[1]} passHref>
                  <Typography sx={{ cursor: 'pointer', textDecoration: 'underline 1px', fontWeight: 'bold', '&:hover': { fontWeight: 'bolder', textDecoration: 'underline 2px' }, mt: 4 }}>
                    {link[1]}
                  </Typography>
                </NextLink>
              </Grid>
              <Grid item xs={8} md={4}>
                <Typography variant="h3">{title[2]}</Typography>
                <Typography>
                  {comment[2]}
                </Typography>
                <NextLink href={url[2]} passHref>
                  <Typography sx={{ cursor: 'pointer', textDecoration: 'underline 1px', fontWeight: 'bold', '&:hover': { fontWeight: 'bolder', textDecoration: 'underline 2px' }, mt: 4 }}>
                    {link[2]}
                  </Typography>
                </NextLink>
              </Grid>
              <Grid item xs={8} md={4}>
                <Typography variant="h3">{title[3]}</Typography>
                <Typography>
                  {comment[3]}
                </Typography>
                <NextLink href={url[3]} passHref>
                  <Typography sx={{ cursor: 'pointer', textDecoration: 'underline 1px', fontWeight: 'bold', '&:hover': { fontWeight: 'bolder', textDecoration: 'underline 2px' }, mt: 4 }}>
                    {link[3]}
                  </Typography>
                </NextLink>
              </Grid>
              {/* <FilledInput
                fullWidth
                placeholder="Enter your email"
                endAdornment={
                  <InputAdornment position="end">
                    <Button variant="contained" size="large" sx={{ minWidth: 48, px: 0 }}>
                      <Iconify icon={chevronRight} sx={{ width: 22, height: 22 }} />
                    </Button>
                  </InputAdornment>
                }
                sx={{
                  pr: 0.5,
                  my: 5,
                  '& .MuiFilledInput-input': {
                    py: '18px',
                  },
                }}
              /> */}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
