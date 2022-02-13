import './App.css';
import React, { forwardRef, Suspense, useImperativeHandle, useRef, useState } from 'react'
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import ResponsiveAppBar from './components/layouts/Header';
import { makeStyles } from '@mui/styles';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { OrthographicCamera } from 'three';
import { Box, Button, Grid } from '@mui/material';
import { PerspectiveCamera } from 'three';
import { Link } from 'react-router-dom';
const Model = () => {
  const ref = useRef()
  const scenes = [
    [useLoader(GLTFLoader, "./rest.gltf"), [-137, -40, 200]],
    [useLoader(GLTFLoader, "./office1.gltf"), [-319, -22.25, -210]],
    [useLoader(GLTFLoader, "./office2.gltf"), [-70.7, -40, -32]],
    [useLoader(GLTFLoader, "./indoor.gltf"), [-217.2, -22.25, 93]],
    [useLoader(GLTFLoader, "./meeting.gltf"), [-311, -22.25, 128.35]],

  ]
  return (
    <group ref={ref}>
      {scenes.map((scene, idx) => {
        return (<mesh position={scene[1]} key={idx}>
          <primitive object={scene[0].scene} scale={1} />
        </mesh>)
      })}
    </group>
  );
};

useGLTF.preload('./rest.gltf')
useGLTF.preload('./office1.gltf')
useGLTF.preload('./office2.gltf')
useGLTF.preload('./indoor.gltf')
useGLTF.preload('./meeting.gltf')

const linear = (x, fn) => (fn(x))

const AnimeGenerate = (fn, fade = linear) => ((camera, time, duration = 2) => {
  if (time < duration) {
    camera.position.x = fade(time / duration, fn)
    camera.position.y = fade(time / duration, fn)
    camera.position.z = fade(time / duration, fn)
    camera.rotation.x = fade(time / duration, fn)
    camera.rotation.y = fade(time / duration, fn)
    camera.rotation.z = fade(time / duration, fn)
  }
  else {
    camera.position.x = fn(1.)
    camera.position.y = fn(1.)
    camera.position.z = fn(1.)
    camera.rotation.x = fn(1.)
    camera.rotation.y = fn(1.)
    camera.rotation.z = fn(1.)
  }
}
)

const PathGenerate = (src, dst) => (t) => {
  if (t < 1) {

    return [
      src[0] * (1 - t) + dst[0] * t,
      src[1] * (1 - t) + dst[1] * t,
      src[2] * (1 - t) + dst[2] * t,
      src[3] * (1 - t) + dst[3] * t,
      src[4] * (1 - t) + dst[4] * t,
      src[5] * (1 - t) + dst[5] * t,
    ]
  } else {
    return dst;
  }
}

const Dolly = (states) => {
  // This one makes the camera move in and out

  useFrame((state, delta) => {
    if (states.tab === 'Home') {
      state.camera.position.z = 0 + Math.sin(state.clock.getElapsedTime()) * 30
      state.camera.rotation.y = Math.PI * Math.cos(state.clock.getElapsedTime() * 0.25)
    } else if (states.tab === 'News') {
      state.camera.position.set(-30, 0, 100)
      // state.camera.position.set(position[0], position[1], position[2])
      state.camera.rotation.set(0, 0, 0)
    } else if (states.tab === 'About') {
      state.camera.position.set(-80, 0, -20)
      state.camera.rotation.set(0, -Math.PI / 6, 0)
    } else if (states.tab === 'Research') {
      state.camera.position.set(-45, 0, 210)
      state.camera.rotation.set(0, Math.PI / 9, 0)
    } else if (states.tab === 'People') {
      state.camera.position.set(-20, -5, -30)
      state.camera.rotation.set(0, -Math.PI / 12 * 5, 0)
    } else if (states.tab === 'Join Us') {
      state.camera.position.set(-40, -3, 80)
      state.camera.rotation.set(0, Math.PI / 24 * 5, 0)
    } else {
      alert("invalid")
    }
    // const position = states.fn(state.clock.getElapsedTime() - states.trigger)
    // state.camera.position.set(position[0], position[1], position[2])
    // state.camera.rotation.set(position[4], position[5], position[6])
    state.camera.setFocalLength(40 + 10 * Math.sin(state.clock.getElapsedTime() * 2))
    state.camera.updateProjectionMatrix();

  })
  return null
}

const RefDolly = forwardRef((states, ref) => {
  const [trigger, setTrigger] = useState(-1);
  const [fn, setFn] = useState(() => ((t) => [t, 0, 0, 0, 0, 0]));
  const clock = useThree((state) => state.clock)
  const camera = useThree((state) => state.camera)
  useImperativeHandle(ref, () => ({
    setTrig: (tab, option) => {
      if (tab !== option) {
        setTrigger(clock.getElapsedTime())
      }
    },
    setF: (tab, option) => {
      var dst = null
      if (option === 'Home') {
        dst = [0, 0, 0, 0, 0, 0]
      } else if (option === 'News') {
        dst = [-30, 0, 100, 0, 0, 0]
      } else if (option === 'About') {
        dst = [-80, 0, -20, 0, -Math.PI / 6, 0]
      } else if (option === 'Research') {
        dst = [-45, 0, 210, 0, Math.PI / 9, 0]
      } else if (option === 'People') {
        dst = [-20, -5, -30, 0, -Math.PI / 12 * 5, 0]
      } else if (option === 'Join Us') {
        dst = [-40, -3, 80, 0, Math.PI / 24 * 5, 0]
      } else {
        alert("invalid")
      }
      if (tab !== option) {
        setFn(() => (
          tab === 'Home' || option === 'Home' ?
            PathGenerate([
              camera.position.x,
              camera.position.y,
              camera.position.z,
              camera.rotation.x,
              camera.rotation.y,
              camera.rotation.z,
            ], dst) : SmoothPathGenerate(
              tab, option
            )
        ))
      }
    }
  }));
  useFrame((state, delta) => {
    if (states.tab === "Home") {
      state.camera.position.set(0, 0, 0)
      state.camera.rotation.set(0, 0, 0)
      state.camera.position.z = 0 + Math.sin(state.clock.getElapsedTime()) * 30
      state.camera.rotation.y = Math.PI * Math.cos(state.clock.getElapsedTime() * 0.25)
    } else {
      const position = fn((state.clock.getElapsedTime() - trigger) / 1)
      state.camera.position.set(position[0], position[1], position[2])
      state.camera.rotation.set(position[3], position[4], position[5])
      // state.camera.setFocalLength(40 + 10 * Math.sin(state.clock.getElapsedTime() * 2))
    }
    // console.log('x', state.camera.position.x, 'y', state.camera.position.y, 'z', state.camera.position.z, 'rx', state.camera.rotation.x, 'ry', state.camera.rotation.y, 'rz', state.camera.rotation.z)
    // console.log((state.clock.getElapsedTime() - trigger))
    state.camera.updateProjectionMatrix();
  })
  return null
})

const Scene = (states) => {
  return (
    <Canvas className='Canvas'>
      <Suspense fallback={null}>
        <directionalLight />
        <ambientLight color={0x7f7f7f} />
        <Model />
        {/* <OrbitControls /> */}
        <RefDolly ref={states.cref} state_in={states.state} tab={states.tab} />
      </Suspense>
    </Canvas>
  );
}

const SmoothPathGenerate = (x, y) => (z) => {
  const inner = SmoothPathGenerateInner(x, y)
  if (z < 1) { return inner(z) }
  else { return inner(1) }
}
const SmoothPathGenerateInner = (x, y) => (z) => {
  if (x === y) { alert('Not allowed!') }
  else if (x === "News" && y === "About") {
    if (z <= 0.4) { let tmp = z; return [-30 + 30 * tmp, 0, 100 - 200 * tmp, 0, 0, 0]; }
    else if (z <= 0.5) { let tmp = z - 0.4; return [-18 + 10 * tmp, 0, 20 - 200 * tmp, 0, 0, 0]; }
    else if (z <= 0.6) { let tmp = z - 0.5; return [-17, 0, -200 * tmp, 0, 0, 0]; }
    else if (z <= 0.7) { let tmp = z - 0.6; return [-17 - 30 * tmp, 0, -20, 0, - Math.PI * tmp / 2.4, 0]; }
    else { let tmp = z - 0.7; return [-20 - 200 * tmp, 0, -20, 0, - Math.PI / 24 - Math.PI * tmp / 2.4, 0]; }
  }
  else if (x === "About" && y === "News") {
    if (z <= 0.3) { let tmp = z; return [-80 + 200 * tmp, 0, -20, 0, - Math.PI / 6 + Math.PI * tmp / 2.4, 0]; }
    else if (z <= 0.4) { let tmp = z - 0.3; return [-20 + 30 * tmp, 0, -20, 0, - Math.PI / 24 + Math.PI * tmp / 2.4, 0]; }
    else if (z <= 0.5) { let tmp = z - 0.4; return [-17, 0, -20 + 200 * tmp, 0, 0, 0]; }
    else if (z <= 0.6) { let tmp = z - 0.5; return [-17 - 10 * tmp, 0, 200 * tmp, 0, 0, 0]; }
    else { let tmp = z - 0.6; return [-18 - 30 * tmp, 0, 20 + 200 * tmp, 0, 0, 0]; }
  }
  else if (x === "About" && y === "Research") {
    if (z <= 0.3) { let tmp = z; return [-80 + 200 * tmp, 0, -20, 0, -Math.PI / 6 + Math.PI * tmp / 2.4, 0]; }
    else if (z <= 0.4) { let tmp = z - 0.3; return [-20 + 30 * tmp, 0, -20, 0, - Math.PI / 24 + Math.PI * tmp / 2.4, 0]; }
    else if (z <= 0.7) { let tmp = (z - 0.4) / 3; return [-17, 0, -20 + 2200 * tmp, 0, 0, 0]; }
    else if (z <= 0.8) { let tmp = z - 0.7; return [-17 - 30 * tmp, 0, 200 + 100 * tmp, 0, 0, 0]; }
    else if (z <= 0.9) { let tmp = z - 0.8; return [-20 - 150 * tmp, 0, 210, 0, Math.PI * tmp / 1.8, 0]; }
    else { let tmp = z - 0.9; return [-35 - 100 * tmp, 0, 210, 0, Math.PI / 18 + Math.PI * tmp / 1.8, 0]; }
  }
  else if (x === "Research" && y === "About") {
    if (z <= 0.1) { let tmp = z; return [-45 + 100 * tmp, 0, 210, 0, Math.PI / 9 - Math.PI * tmp / 1.8, 0]; }
    else if (z <= 0.2) { let tmp = z - 0.1; return [-35 + 150 * tmp, 0, 210, 0, Math.PI / 18 - Math.PI * tmp / 1.8, 0]; }
    else if (z <= 0.3) { let tmp = z - 0.2; return [-20 + 30 * tmp, 0, 210 - 100 * tmp, 0, 0, 0]; }
    else if (z <= 0.6) { let tmp = (z - 0.3) / 3; return [-17, 0, 200 - 2200 * tmp, 0, 0, 0]; }
    else if (z <= 0.7) { let tmp = z - 0.6; return [-17 - 30 * tmp, 0, -20, 0, - Math.PI * tmp / 2.4, 0]; }
    else { let tmp = z - 0.7; return [-20 - 200 * tmp, 0, -20, 0, -Math.PI / 24 - Math.PI * tmp / 2.4, 0]; }
  }
  else if (x === "Research" && y === "People") {
    if (z <= 0.1) { let tmp = z; return [-45 + 100 * tmp, 0, 210, 0, Math.PI / 9 - Math.PI * tmp / 1.8, 0]; }
    else if (z <= 0.2) { let tmp = z - 0.1; return [-35 + 150 * tmp, 0, 210, 0, Math.PI / 18 - Math.PI * tmp / 1.8, 0]; }
    else if (z <= 0.3) { let tmp = z - 0.2; return [-20 + 30 * tmp, 0, 210 - 100 * tmp, 0, 0, 0]; }
    else if (z <= 0.7) { let tmp = (z - 0.3) / 4; return [-17, 0, 200 - 2200 * tmp, 0, 0, 0]; }
    else if (z <= 0.8) { let tmp = z - 0.7; return [-17 - 30 * tmp, - 40 * tmp, -20 - 80 * tmp, 0, - Math.PI * 4 * tmp / 1.2, 0]; }
    else { let tmp = (z - 0.8) / 2; return [-20, -4 - 10 * tmp, -28 - 20 * tmp, 0, -Math.PI * 4 / 12 - Math.PI * tmp / 1.2, 0]; }
  }
  else if (x === "People" && y === "Research") {
    if (z <= 0.2) { let tmp = z / 2; return [-20, -5 + 10 * tmp, - 30 + 20 * tmp, 0, -Math.PI * 5 / 12 + Math.PI * tmp / 1.2, 0]; }
    else if (z <= 0.3) { let tmp = z - 0.2; return [-20 + 30 * tmp, -4 + 40 * tmp, -28 + 80 * tmp, 0, -Math.PI * 4 / 12 + Math.PI * 4 * tmp / 1.2, 0]; }
    else if (z <= 0.7) { let tmp = (z - 0.3) / 4; return [-17, 0, -20 + 2200 * tmp, 0, 0, 0]; }
    else if (z <= 0.8) { let tmp = z - 0.7; return [-17 - 30 * tmp, 0, 200 + 100 * tmp, 0, 0, 0]; }
    else if (z <= 0.9) { let tmp = z - 0.8; return [-20 - 150 * tmp, 0, 210, 0, + Math.PI * tmp / 1.8, 0]; }
    else { let tmp = z - 0.9; return [-35 - 100 * tmp, 0, 210, 0, Math.PI / 18 + Math.PI * tmp / 1.8, 0]; }
  }
  else if (x === "People" && y === "Join Us") {
    if (z <= 0.4) { let tmp = z / 4; return [-20 + 30 * tmp, -5 + 50 * tmp, -30 + 100 * tmp, 0, -Math.PI * 5 / 12 + Math.PI * 5 * tmp / 1.2, 0]; }
    else if (z <= 0.7) { let tmp = (z - 0.4) / 3; return [-17, 0, -20 + 1000 * tmp, 0, 0, 0]; }
    else { let tmp = (z - 0.7) / 3; return [-17 - 230 * tmp, -30 * tmp, 80, 0, Math.PI * 5 * tmp / 2.4, 0]; }
  }
  else if (x === "Join Us" && y === "People") {
    if (z <= 0.3) { let tmp = z / 3; return [-40 + 230 * tmp, -3 + 30 * tmp, 80, 0, Math.PI * 5 / 24 - Math.PI * 5 * tmp / 2.4, 0]; }
    else if (z <= 0.6) { let tmp = (z - 0.3) / 3; return [-17, 0, 80 - 1000 * tmp, 0, 0, 0]; }
    else { let tmp = (z - 0.6) / 4; return [-17 - 30 * tmp, -50 * tmp, -20 - 100 * tmp, 0, -Math.PI * 5 * tmp / 1.2, 0]; }
  }
  else if (x === "Join Us" && y === "News") {
    let tmp = z / 10; return [-40 + 100 * tmp, -3 + 30 * tmp, 80 + 200 * tmp, 0, Math.PI * 5 / 24 - Math.PI * 5 * tmp / 2.4, 0];
  }
  else if (x === "News" && y === "Join Us") {
    let tmp = z / 10; return [-30 - 100 * tmp, -30 * tmp, 100 - 200 * tmp, 0, Math.PI * 5 * tmp / 2.4, 0];
  }
  else if (x === "News" && y === "Research") {
    if (z <= 0.4) { let tmp = z / 4; return [-30 + 130 * tmp, 0, 100, 0, 0, 0]; }
    else if (z <= 0.7) { let tmp = (z - 0.4) / 3; return [-17, 0, 100 + 1100 * tmp, 0, Math.PI * tmp / 1.8, 0]; }
    else { let tmp = (z - 0.7) / 3; return [-17 - 280 * tmp, 0, 210, 0, Math.PI / 18 + Math.PI * tmp / 1.8, 0]; }
  }
  else if (x === "Research" && y === "News") {
    if (z <= 0.3) { let tmp = z / 3; return [-45 + 280 * tmp, 0, 210, 0, Math.PI / 9 - Math.PI * tmp / 1.8, 0]; }
    else if (z <= 0.6) { let tmp = (z - 0.3) / 3; return [-17, 0, 210 - 1100 * tmp, 0, Math.PI / 18 - Math.PI * tmp / 1.8, 0]; }
    else { let tmp = (z - 0.6) / 4; return [-17 - 130 * tmp, 0, 100, 0, 0, 0]; }
  }
  else if (x === "About" && y === "People") {
    let tmp = z / 10; return [-80 + 600 * tmp, -50 * tmp, -20 - 100 * tmp, 0, -Math.PI / 6 - Math.PI * tmp / 0.4, 0];
  }
  else if (x === "People" && y === "About") {
    let tmp = z / 10; return [-20 - 600 * tmp, -5 + 50 * tmp, -30 + 100 * tmp, 0, -Math.PI * 5 / 12 + Math.PI * tmp / 0.4, 0];
  }
  else if (x === "Research" && y === "Join Us") {
    if (z <= 0.4) { let tmp = z / 4; return [-45 + 280 * tmp, 0, 210, 0, Math.PI * 1 / 9 - Math.PI * tmp / 0.9, 0]; }
    else if (z <= 0.7) { let tmp = (z - 0.4) / 3; return [-17, 0, 210 - 1300 * tmp, 0, 0, 0]; }
    else { let tmp = (z - 0.7) / 3; return [-17 - 230 * tmp, -30 * tmp, 80, 0, Math.PI * 5 * tmp / 2.4, 0]; }
  }
  else if (x === "Join Us" && y === "Research") {
    if (z <= 0.3) { let tmp = z / 3; return [-40 + 230 * tmp, -3 + 30 * tmp, 80, 0, Math.PI * 5 / 24 - Math.PI * 5 * tmp / 2.4, 0]; }
    else if (z <= 0.6) { let tmp = (z - 0.3) / 3; return [-17, 0, 80 + 1300 * tmp, 0, 0, 0]; }
    else { let tmp = (z - 0.6) / 4; return [-17 - 280 * tmp, 0, 210, 0, + Math.PI * tmp / 0.9, 0]; }
  }
  else if (x === "People" && y === "News") {
    if (z <= 0.4) { let tmp = z / 4; return [-20 + 30 * tmp, -5 + 50 * tmp, -30, 0, -Math.PI * 5 / 12 + Math.PI * 4 * tmp / 1.2, 0]; }
    else if (z <= 0.7) { let tmp = (z - 0.4) / 3; return [-17, 0, -30 + 1300 * tmp, 0, -Math.PI * 1 / 12, 0]; }
    else { let tmp = (z - 0.7) / 3; return [-17 - 130 * tmp, 0, 100, 0, -Math.PI / 12 + Math.PI * tmp / 1.2, 0]; }
  }
  else if (x === "News" && y === "People") {
    if (z <= 0.3) { let tmp = z / 3; return [-30 + 130 * tmp, 0, 100, 0, Math.PI * tmp / 1.2, 0]; }
    else if (z <= 0.6) { let tmp = (z - 0.3) / 3; return [-17, 0, 100 - 1300 * tmp, 0, -Math.PI * 1 / 12, 0]; }
    else { let tmp = (z - 0.6) / 4; return [-17 - 30 * tmp, -50 * tmp, -30, 0, -Math.PI * 1 / 12 - Math.PI * 4 * tmp / 1.2, 0]; }
  }
  else if (x === "Join Us" && y === "About") {
    if (z <= 0.4) { let tmp = z / 4; return [-40 + 230 * tmp, -3 + 30 * tmp, 80, 0, Math.PI * 5 / 24 - Math.PI * 5 * tmp / 2.4, 0]; }
    else if (z <= 0.7) { let tmp = (z - 0.4) / 3; return [-17, 0, 80 - 1000 * tmp, 0, 0, 0]; }
    else { let tmp = (z - 0.7) / 3; return [-17 - 630 * tmp, 0, -20, 0, -Math.PI * tmp / 0.6, 0]; }
  }
  else if (x === "About" && y === "Join Us") {
    if (z <= 0.3) { let tmp = z / 3; return [-80 + 650 * tmp, 0, -20, 0, -Math.PI / 6 + Math.PI * tmp / 0.6, 0]; }
    else if (z <= 0.6) { let tmp = (z - 0.3) / 3; return [-17, 0, -20 + 1000 * tmp, 0, 0, 0]; }
    else { let tmp = (z - 0.6) / 4; return [-17 - 230 * tmp, -30 * tmp, 80, 0, Math.PI * 5 * tmp / 2.4, 0]; }
  }
}

const useStyles = makeStyles(theme => ({
  main: { position: 'relative', display: 'inline-block', width: '100%', height: '100%' },
  appbar: { position: 'sticky', top: 0 },
  canvas: { position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh' },
  header: {
    background: 'rgba(0,0,0,0.5)', position: 'relative',
    height: '100vh',
    // width: '20%',
    minWidth: '20rem',
    maxWidth: '6rem',
  },
  body: {
    background: 'rgba(0,0,0,0.5)', position: 'relative',
    height: '100vh',
    padding: '3rem',
    // width: '20%',
  },
  headerBox: {
    height: "100%",
    width: "100%",
    // maxWidth: '6rem',
  },
  container: { width: '100%', height: '100%' },
  logoBox: { maxHeight: '20vh', height: '100%', display: 'flex', justifyContent: 'center' },
  tabBox: {},
  contentBox: {
    position: 'relative',
    // background: 'red',
    width: '100%',
  }
}))

// Home, News, Research, People, Join Us, About

function App() {
  const controlRef = useRef();
  const tabs = ['Home', 'News', 'Research', 'People', 'Join Us', 'About']
  const fn = (tabName) => tabName;
  const [state, setState] = useState(true)
  const [tab, setTab] = useState("Home")
  const classes = useStyles();

  return (<div className={classes.main}>
    <div className={classes.canvas}>
      <div className="App">
        <Scene cref={controlRef} state={state} tab={tab} />
      </div>
    </div>
    <Grid container className={classes.container}>
      <Grid item xs={12} md={4} className={classes.header}>
        <Box className={classes.logoBox}>
          <img src='./site-logo.png' alt='site-logo' style={{ maxWidth: "100%", maxHeight: "100%" }} />
        </Box>
        {tabs.map((x, idx) => (
          <>
            <Box className={classes.tabBox}>
              <Button key={idx} onClick={() => {
                setState(!state);
                setTab(x);
                // console.log(controlRef.current)
                controlRef.current.setTrig(tab, x)
                controlRef.current.setF(tab, x)
              }}>
                {x}
              </Button>
            </Box>
          </>
        ))}
      </Grid>
      <Grid item md={8} xs={12} className={classes.body}>
        <Box className={classes.contentBox}>
          {fn(tab)}
        </Box>
      </Grid>
    </Grid>
  </div>
  );
}

export default App;
