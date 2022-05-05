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
import { DISCOVER_INTRO, SUMMER_CAMP_ENTRY, SUMMER_CAMP_INTRO, SUMMER_CAMP_PIC_URL } from '_data/config';
import Routes from 'src/routes';

// ----------------------------------------------------------------------

const SUMMARY = [
  { title: 'Years of experience', total: 12, icon: increaseLevel },
  { title: 'Awards', total: 20, icon: trophyIcon },
  { title: 'Projects', total: 150, icon: dataVis4 },
  { title: 'Happy clients', total: 32000, icon: userCertification },
];

const COLORS = ['primary', 'secondary', 'warning', 'success'];

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 0, 10),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
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

export default function SummerCamp() {
  return (
    <RootStyle>
      <Container>
        <Grid container spacing={3} justifyContent="space-between" alignItems="center">
          <Grid
            item
            xs={12}
            md={6}
            lg={5}
            sx={{
              display: { xs: 'none', md: 'block' },
            }}
          >
            <Image
              alt="teams"
              src={SUMMER_CAMP_PIC_URL}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={6} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h2">DISCOVER Summer Camp</Typography>
            <Typography sx={{ mt: 3, mb: 5, color: 'text.secondary' }}>
              {SUMMER_CAMP_INTRO}
            </Typography>

            <Typography variant="h5" sx={{ mt: 3, mb: 1, color: 'text.secondary' }}>
              Sign up:
            </Typography>
            {/* <Grid container spacing={2} xs={12} md={12} lg={12} width="100%" alignItems='center' justifyContent='center'> */}
            {/* <Grid item md={12} lg={4}> */}
            {SUMMER_CAMP_ENTRY.map((item) => (
              <Button
                id={item.id}
                variant="outlined"
                color="inherit"
                size="large"
                sx={{ mr: 1, mt: 1 }}
                endIcon={<Iconify icon={directionStraightRight} sx={{ width: 22, height: 22 }} />}
                href={item.description}
              >
                {item.description}
              </Button>
            ))}
            {/* </Grid> */}
            {/* </Grid> */}
          </Grid>
        </Grid>

        <Box
          sx={{
            my: { xs: 8, md: 15 },
          }}
        />

        {/* <Box
          sx={{
            textAlign: 'center',
            display: 'grid',
            gap: { xs: 5, md: 8 },
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
        >
          {SUMMARY.map((value, index) => (
            <BoxItem key={value.title} value={value} index={index} />
          ))}
        </Box> */}
      </Container>
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
