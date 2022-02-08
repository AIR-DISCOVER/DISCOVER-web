import './App.css';
import React, { forwardRef, Suspense, useImperativeHandle, useRef, useState } from 'react'
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import ResponsiveAppBar from './components/layouts/Header';
import { makeStyles } from '@mui/styles';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { OrthographicCamera } from 'three';
import { Button } from '@mui/material';
import { PerspectiveCamera } from 'three';
const Model = () => {
  const ref = useRef()
  // const rest = 
  const scenes = [
    [useLoader(GLTFLoader, "./rest.gltf"), [-137, -40, 200]],
    [useLoader(GLTFLoader, "./office1.gltf"), [-319, -22.25, -210]],
    [useLoader(GLTFLoader, "./office2.gltf"), [-70.7, -40, -32]],
    [useLoader(GLTFLoader, "./indoor.gltf"), [-217.2, -22.25, 93]],
    [useLoader(GLTFLoader, "./meeting.gltf"), [-311, -22.25, 128.35]],

  ]
  // move model:
  // useFrame((state, delta) => { ref.current.rotation.y += 0.000 })
  return (<group ref={ref}>
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
useGLTF.preload('./work1.gltf')

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
    setTrig: () => { setTrigger(clock.getElapsedTime()) },
    setF: (option) => {
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
      console.log(trigger, 'x', camera.position.x, 'y', camera.position.y, 'z', camera.position.z, 'rx', camera.rotation.x, 'ry', camera.rotation.y, 'rz', camera.rotation.z, dst[0], dst[1], dst[2], dst[3], dst[4], dst[5])
      setFn(() => (PathGenerate([
        camera.position.x,
        camera.position.y,
        camera.position.z,
        camera.rotation.x,
        camera.rotation.y,
        camera.rotation.z,
      ], dst)))
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


const useStyles = makeStyles(theme => ({
  appbar: { position: 'sticky', top: 0 },
  body: { position: 'sticky', top: 0 },
}))

// Home, News, Research, People, Join Us, About

function App() {
  const controlRef = useRef();
  const tabs = ['Home', 'News', 'Research', 'People', 'Join Us', 'About']
  const [state, setState] = useState(true)
  const [tab, setTab] = useState("Home")
  const classes = useStyles();

  return (<>
    {tabs.map((x, idx) => (<Button key={idx} onClick={() => {
      setState(!state);
      setTab(x);
      // console.log(controlRef.current)
      controlRef.current.setTrig()
      controlRef.current.setF(x)
    }}>{x}</Button>))}

    <body className={classes.body}>
      <div className="App">
        <Scene cref={controlRef} state={state} tab={tab} />
      </div>
    </body>
  </>
  );
}

export default App;
