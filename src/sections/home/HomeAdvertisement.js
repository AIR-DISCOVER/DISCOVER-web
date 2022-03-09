import PropTypes from 'prop-types';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Button, Stack, Typography } from '@mui/material';
// hooks
import { useHoverParallax } from '../../hooks';
// routes
// components

import Scene from '../../legacy';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  position: 'relative',
}));

const ContentStyle = styled(Stack)(({ theme }) => ({
  left: 0,
  right: 0,
  zIndex: 9,
  height: '100%',
  display: 'flex',
  textAlign: 'center',
  position: 'absolute',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(2.5),
  color: theme.palette.common.white,
}));

const BackgroundStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  '&:before': {
    zIndex: 8,
    content: '""',
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: alpha(theme.palette.grey[900], 0.8),
  },
}));

// ----------------------------------------------------------------------

export default function HomeAdvertisement({ cref, tab, onClick }) {
  const { offsetX, offsetY, onMouseMoveHandler, onMouseLeaveHandler } = useHoverParallax();

  return (
    <RootStyle onMouseMove={onMouseMoveHandler} onMouseLeave={onMouseLeaveHandler}>
      <ContentStyle>
        <Typography variant="h3" sx={{ opacity: 0.72 }}>
          Start Now
        </Typography>
        <Typography variant="h1" component="h2" sx={{ mt: 1, mb: 8 }}>
          Create Your
          <br /> Website Today
        </Typography>
        <Button
          size="large"
          variant="contained"
          target="_blank"
          rel="noopener"
          // href={Routes.buyNow}
          onClick={onClick}
        >
          Purchase Now
        </Button>
      </ContentStyle>
      <Background cref={cref} tab={tab} offsetX={offsetX} offsetY={offsetY} />
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

Background.propTypes = {
  offsetX: PropTypes.func,
  offsetY: PropTypes.func,
};

function Background({ offsetX, offsetY, cref, tab }) {
  const boxStyle = { position: 'absolute', top: 0, width: 1, height: 1 };
  return (
    <BackgroundStyle>
      <Scene cref={cref} tab={tab} />
    </BackgroundStyle>
  );
}
