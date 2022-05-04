import PropTypes from 'prop-types';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
// @mui
import { styled, alpha } from '@mui/material/styles';
// hooks
import { useHoverParallax } from '../../hooks';
import { useInterval } from 'react-use';
// routes
// components

import Scene from '../../legacy';
import { useEffect, useState } from 'react';
import { set } from 'date-fns';
import { Box } from '@mui/material';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  position: 'relative',
  zIndex: -1,
}));

const BackgroundStyle = styled('div')(({ theme, progress, fade }) => ({
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
    backgroundColor: alpha(theme.palette.grey[900], progress < 1 ? 1 : (1 - 0.6 * fade)),
  },
}));


export default function Background({ cref }) {
  const { offsetX, offsetY, onMouseMoveHandler, onMouseLeaveHandler } = useHoverParallax();
  const [timer, setTimer] = useState(0)
  const [progress, setProgress] = useState(0.);
  const onSetProgress = (_progress) => {
    setProgress(_progress)
    if (_progress >= 100) { setInterval(10); console.log('start') }
  }
  const [count, setCount] = useState(30);
  const [interval, setInterval] = useState(null);

  useInterval(
    () => {
      setCount(count + 10)
      console.log(count)
    }, interval
  )

  useEffect(() => {
    if (count > 1000) setInterval(null)
  }, [count])
  return (
    <RootStyle onMouseMove={onMouseMoveHandler} onMouseLeave={onMouseLeaveHandler}>
      <BackgroundInner cref={cref} offsetX={offsetX} offsetY={offsetY} progress={progress} setProgress={onSetProgress} fade={Math.min(count / 10, 1)} />
    </RootStyle>
  );
}
BackgroundInner.propTypes = {
  offsetX: PropTypes.func,
  offsetY: PropTypes.func,
};

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
  [`.MuiLinearProgress-bar`]: {
    transition: 'none'
  },
  zIndex: 9
}));

function BackgroundInner({ offsetX, offsetY, cref, progress, setProgress, fade }) {

  return (
    <BackgroundStyle progress={progress} fade={fade}>
      {progress < 100 ? (
        < LinearProgress variant='determinate' value={progress} bar={{ transition: 'none' }} sx={{ width: '100%', }} />
      ) : null}
      <Scene cref={cref} modelCallback={setProgress} />
    </BackgroundStyle>
  );
}


