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
import { useContext, useEffect, useRef, useState } from 'react';
import { set } from 'date-fns';
import { Box } from '@mui/material';
import { Context } from 'src/store/GlobalStateStore';
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
    backgroundColor: alpha(theme.palette.grey[900], progress < 1 ? 1 : (1- 0.6 * fade)),
  },
}));



export default function Background({ cref }) {

  const { offsetX, offsetY, onMouseMoveHandler, onMouseLeaveHandler } = useHoverParallax();
  const [store, dispatch] = useContext(Context)
  const [interval, setInterval] = useState(null);
  const onSetProgress = (_progress) => {
    dispatch({ type: 'PROGRESS_INCREASE', payload: _progress })
  }

  useInterval(
    () => {
      dispatch({ type: 'FADE_SET', payload: store.fade + 20 })
    }, interval
  )

  useEffect(() => {
    if (store.progress >= 100) {
      dispatch({ type: 'FADE_SET', payload: 0. })
    }
  }, [])

  useEffect(() => {
    if (store.fade > 1000) setInterval(null)
    else if (store.progress >= 100) setInterval(20)
  }, [store])

  return (
    <RootStyle onMouseMove={onMouseMoveHandler} onMouseLeave={onMouseLeaveHandler}>
      <BackgroundInner cref={cref} offsetX={offsetX} offsetY={offsetY} progress={store.progress} setProgress={onSetProgress} fade={store.fade / 1000} />
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
        // <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '10rem', position: 'absolute' }}>

        <LinearProgress variant='determinate' value={progress} bar={{ transition: 'none' }} sx={{ zIndex: 9 }} />
        // </div>
      ) : null}
      <Scene cref={cref} modelCallback={setProgress} />
    </BackgroundStyle>
  );
}


