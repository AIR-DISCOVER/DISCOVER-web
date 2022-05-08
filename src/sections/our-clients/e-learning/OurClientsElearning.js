import PropTypes from 'prop-types';
import Slider from 'react-slick';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Typography, Stack, Container } from '@mui/material';
// components
import { Image, SvgIconStyle } from '../../../components';

// ----------------------------------------------------------------------

const RootStyle = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 0),
  },
}));

// ----------------------------------------------------------------------

CustomerElearning.propTypes = {
  brands: PropTypes.array.isRequired,
};

export default function CustomerElearning({ brands }) {
  const theme = useTheme();

  const carouselSettings = {
    arrows: true,
    // infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <RootStyle>
      <Container>
        <Stack spacing={3} sx={{ mb: 8, mx: 'auto', maxWidth: 480, textAlign: 'center' }}>
          <Typography variant="h2">We Work With</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Quisque aliquet, libero consequat elementum convallis.
          </Typography>
        </Stack>

        <Slider {...carouselSettings}>
          {brands.map((brand) => (
            <Image
              alt={brand.name}
              src={brand.image}
              sx={{
                width: 106,
                height: 64,
                mx: 'auto',
              }}
            />
          ))}
        </Slider>
      </Container>
    </RootStyle>
  );
}
