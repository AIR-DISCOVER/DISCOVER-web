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
import cssStyles from 'src/utils/cssStyles';

// ----------------------------------------------------------------------


const COLORS = ['primary', 'secondary', 'warning', 'success'];

const RootStyle = styled('div')(({ bgURL, direction = 'left', theme }) => ({
  padding: theme.spacing(10, 0),
  ...cssStyles(theme).bgImage({
    direction: direction,
    url: bgURL,
    startColor: `${alpha(theme.palette.common.black, 0.88)}`,
    endColor: `${alpha(theme.palette.common.black, 0.88)}`,
  }),
  [theme.breakpoints.up('md')]: {
    ...cssStyles(theme).bgImage({
      direction: direction,
      url: bgURL,
      startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
      endColor: `${alpha(theme.palette.common.black, 1)} 65%`,
    }),
    backgroundPosition: 'center, left ',
    backgroundSize: 'cover',
  },
  color: theme.palette.grey[0]
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

export default function ProgramCard({ program }) {
  const { title, intro, imageURL, beforeEntry, entry, reverse } = program
  return (
    <RootStyle bgURL={imageURL} direction={reverse ? 'left' : 'right'}>
      <Container>
        <Grid container spacing={3} direction={reverse ? 'row-reverse' : 'row'} justifyContent="space-between" alignItems="center">
          <Grid
            item
            xs={12}
            md={6}
            lg={5}
            sx={{
              display: { xs: 'none', md: 'block' },
            }}
          >
            {/* <Image
              alt="teams"
              src={imageURL}
              sx={{ borderRadius: 2 }}
            /> */}
          </Grid>

          <Grid item xs={12} md={6} lg={6} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h2">{title}</Typography>
            <Typography sx={{ mt: 3, mb: 5, color: 'rgb(128,128,128)', fontSize: '1.1rem' }}>
              {intro}
            </Typography>

            <Typography variant="h5" sx={{ mt: 3, mb: 1, color: 'rgb(128,128,128)', fontSize: '1.1rem' }}>
              {beforeEntry}
            </Typography>
            {/* <Grid container spacing={2} xs={12} md={12} lg={12} width="100%" alignItems='center' justifyContent='center'> */}
            {/* <Grid item md={12} lg={4}> */}
            {entry.map((item) => (
              <Button
                id={item.id}
                variant="outlined"
                color="inherit"
                size="large"
                sx={{ mr: 1, mt: 1 }}
                endIcon={<Iconify icon={directionStraightRight} sx={{ width: 22, height: 22 }} />}
                href={item.href}
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
