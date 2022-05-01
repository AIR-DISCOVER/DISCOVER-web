import PropTypes from 'prop-types';
// @mui
import { styled, alpha } from '@mui/material/styles';
// hooks
import { useHoverParallax } from '../../hooks';
// routes
// components

import Scene from '../../legacy';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  position: 'relative',
  zIndex: -1,
}));

const BackgroundStyle = styled('div')(({ theme }) => ({
  background: theme.palette.mode === 'light' ? 'white' : 'black',
  overflow: 'hidden',
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  zIndex: 0,
  '&:before': {
    zIndex: 1,
    content: '""',
    width: '100vw',
    height: '100vh',
    position: 'absolute',
    backgroundColor: alpha(theme.palette.grey[900], 0.3),
  },
}));


export default function Background({ cref, tab, onClick }) {
  const { offsetX, offsetY, onMouseMoveHandler, onMouseLeaveHandler } = useHoverParallax();

  return (
    <RootStyle onMouseMove={onMouseMoveHandler} onMouseLeave={onMouseLeaveHandler}>
      <BackgroundInner cref={cref} tab={tab} offsetX={offsetX} offsetY={offsetY} />
    </RootStyle>
  );
}
BackgroundInner.propTypes = {
  offsetX: PropTypes.func,
  offsetY: PropTypes.func,
};

function BackgroundInner({ offsetX, offsetY, cref, tab }) {
  return (
    <BackgroundStyle>
      <Scene cref={cref} tab={tab} />
    </BackgroundStyle>
  );
}
