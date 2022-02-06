import './App.css';
import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import ResponsiveAppBar from './components/layouts/Header';
import { makeStyles } from '@mui/styles';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { OrthographicCamera } from 'three';
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

function Dolly() {
  // This one makes the camera move in and out
  useFrame(({ clock, camera }) => {
    // camera.position.z = 0 + Math.sin(clock.getElapsedTime()) * 30
    // camera.rotation.y = Math.PI * Math.cos(clock.getElapsedTime() * 0.25)
    // camera.rotation.y = Math.PI
    // camera.position.z = -20

    // News
    camera.position.set(-30, 0, 100)
    camera.rotation.set(0, 0, 0)
    camera.setFocalLength(40 + 10 * Math.sin(clock.getElapsedTime() * 2))

    // // About
    // camera.position.set(-80, 0, -20)
    // camera.rotation.set(0, -Math.PI / 6, 0)

    // // Research
    // camera.position.set(-45, 0, 210)
    // camera.rotation.set(0, Math.PI / 9, 0)

    // // People
    // camera.position.set(-20, -5, -30)
    // camera.rotation.set(0, -Math.PI / 12 * 5, 0)

    // // Join Us
    // camera.position.set(-40, -3, 80)
    // camera.rotation.set(0, Math.PI / 24 * 5, 0)

    // console.log(camera.rotation)

  })
  return null
}

const Scene = () => {
  return (
    <Canvas className='Canvas' camera={{ fov: 60, position: [0, 0, 0] }}>
      <Suspense fallback={null}>
        <directionalLight />
        <ambientLight color={0x7f7f7f} />
        <Model />
        {/* <OrbitControls /> */}
        <Dolly />
      </Suspense>
    </Canvas>
  );
}


const useStyles = makeStyles(theme => ({
  appbar: { position: 'sticky', top: 0 },
  body: { position: 'sticky', top: 0 },
}))

function App() {
  const classes = useStyles();
  return (<>
    {/* <ResponsiveAppBar className={classes.appbar}></ResponsiveAppBar> */}
    <body className={classes.body}>
      <div className="App">
        <Scene />
      </div>
    </body>
  </>
  );
}

export default App;
