import PropTypes from 'prop-types';
// icons
import trophyIcon from '@iconify/icons-carbon/trophy';
import dataVis4 from '@iconify/icons-carbon/data-vis-4';
import increaseLevel from '@iconify/icons-carbon/increase-level';
import userCertification from '@iconify/icons-carbon/user-certification';
import directionStraightRight from '@iconify/icons-carbon/direction-straight-right';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Grid, Box, Container, Typography, Button } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
// components
import { Iconify, CountUpNumber, Image } from '../../../components';
import { DISCOVER_INTRO } from '_data/config';
import Routes from 'src/routes';
import cssStyles from 'src/utils/cssStyles';
import { HEADER_DESKTOP_HEIGHT, HEADER_MOBILE_HEIGHT } from 'src/config';

// ----------------------------------------------------------------------

const SUMMARY = [
  { title: 'Years of experience', total: 12, icon: increaseLevel },
  { title: 'Awards', total: 20, icon: trophyIcon },
  { title: 'Projects', total: 150, icon: dataVis4 },
  { title: 'Happy clients', total: 32000, icon: userCertification },
];

const COLORS = ['primary', 'secondary', 'warning', 'success'];

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(0, 0),
  },
}));

const CoverDiv = styled('div', { shouldForwardProp: (prop) => prop != 'bgURL' })(({ bgURL, theme }) => ({
  padding: theme.spacing(0, 10),
  ...cssStyles(theme).bgImage({
    url: bgURL,
    startColor: `${alpha(theme.palette.grey[900], 0.5)}`,
    endColor: `${alpha(theme.palette.grey[0], 1)} 95%`,
  }),
  [theme.breakpoints.up('md')]: {
    minHeight: '100vh',
    ...cssStyles(theme).bgImage({
      direction: 'bottom',
      url: bgURL,
      startColor: `${alpha(theme.palette.grey[900], 0.25)} 35%`,
      endColor: `${alpha(theme.palette.grey[0], 1)} 85%`,
    }),
    backgroundPosition: 'center, top ',
    backgroundSize: 'contain',
  },
}));
const IconStyle = styled('div', {
  shouldForwardProp: (prop) => prop !== 'color',
})(({ color, theme }) => ({
  width: 160,
  height: 160,
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  position: 'relative',
  justifyContent: 'center',
  color: theme.palette[color].darker,
  border: `dashed 2px ${alpha(theme.palette[color].main, 0.24)}`,
  '&:before': {
    zIndex: 8,
    content: '""',
    borderRadius: '50%',
    position: 'absolute',
    width: 'calc(100% - 48px)',
    height: 'calc(100% - 48px)',
    background: `conic-gradient(from 0deg at 50% 50%, ${theme.palette[color].main} 0deg, ${theme.palette[color].light} 360deg)`,
  },
  '& svg': {
    zIndex: 9,
  },
}));

// ----------------------------------------------------------------------

export default function MarketingAbout() {
  return (
    <RootStyle>
      <Box sx={{ px: 0, mx: 0, width: '100%' }}>
        <CoverDiv bgURL="/images/discover.jpg" >
          <Box item xs={12} md={6} lg={6} sx={{
            textAlign: {
              xs: 'center', md: 'left',
            },
            pt: { xs: HEADER_MOBILE_HEIGHT / 8, md: HEADER_DESKTOP_HEIGHT / 8 }
          }}>
            <Box sx={{ height: '60vh' }}></Box>
            <Typography variant="h2">Who We Are?</Typography>
            <Typography sx={{ mt: 3, mb: 5, color: 'text.secondary' }}>
              {DISCOVER_INTRO}
            </Typography>

            <Typography variant="h5" sx={{ mt: 3, mb: 1, color: 'text.secondary' }}>
              Check our work:
            </Typography>
            {/* <Grid container spacing={2} xs={12} md={12} lg={12} width="100%" alignItems='center' justifyContent='center'> */}
            {/* <Grid item md={12} lg={4}> */}

            <Button
              variant="outlined"
              color="inherit"
              size="large"
              sx={{ mr: 1, mt: 1 }}
              endIcon={<Iconify icon={directionStraightRight} sx={{ width: 22, height: 22 }} />}
              href={Routes.mechanic.landing}
            >
              Robotics Group
            </Button>
            {/* </Grid> */}
            {/* <Grid item md={12} lg={4}> */}
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              sx={{ mr: 1, mt: 1 }}
              endIcon={<Iconify icon={directionStraightRight} sx={{ width: 22, height: 22 }} />}
              href={Routes.sun.landing}
            >
              Vision Group
            </Button>
            {/* </Grid> */}
            {/* <Grid item md={12} lg={4}> */}
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              sx={{ mr: 1, mt: 1 }}
              href={Routes.hci.landing}
              endIcon={<Iconify icon={directionStraightRight} sx={{ width: 22, height: 22 }} />}
            >
              HCI Group
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              sx={{ mr: 1, mt: 1 }}
              href={Routes.area.transportation}
              endIcon={<Iconify icon={directionStraightRight} sx={{ width: 22, height: 22 }} />}
            >
              Transportation Area
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              sx={{ mr: 1, mt: 1 }}
              href={Routes.area.manufacturing}
              endIcon={<Iconify icon={directionStraightRight} sx={{ width: 22, height: 22 }} />}
            >
              Manufacturing Area
            </Button>
            {/* </Grid> */}
            {/* </Grid> */}
          </Box>
        </CoverDiv>
        <Box
          sx={{
            my: { xs: 8, md: 15 },
          }}
        />
      </Box>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

BoxItem.propTypes = {
  index: PropTypes.number,
  value: PropTypes.shape({
    icon: PropTypes.any,
    title: PropTypes.string,
    total: PropTypes.number,
  }),
};

function BoxItem({ value, index }) {
  return (
    <div>
      <IconStyle color={COLORS[index]}>
        <Iconify icon={value.icon} sx={{ width: 48, height: 48 }} />
      </IconStyle>
      <Typography variant="h2" sx={{ mt: 2, mb: 1 }}>
        <CountUpNumber
          start={value.total / 5}
          end={value.total}
          formattingFn={(value) => fShortenNumber(value)}
        />
      </Typography>
      <Typography sx={{ color: 'text.secondary' }}>{value.title}</Typography>
    </div>
  );
}
