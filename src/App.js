import './App.css';
import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
const Model = () => {
  const ref = useRef()
  const gltf = useLoader(GLTFLoader, "./rest.gltf");
  useFrame((state, delta) => { ref.current.rotation.y += 0.000 })
  return (
    <mesh ref={ref} position={[-100, -40, 200]}>
      <primitive object={gltf.scene} scale={1} />
    </mesh>
  );
};

function Dolly() {
  // This one makes the camera move in and out
  useFrame(({ clock, camera }) => {
    camera.position.z = 0 + Math.sin(clock.getElapsedTime()) * 30
    camera.rotation.y = Math.PI / 2 * Math.cos(clock.getElapsedTime() * 0.5)
  })
  return null
}
const Scene = () => {

  return (
    <Canvas className='Canvas' camera={{ fov: 75, position: [0, 0, 70] }}>
      <Suspense fallback={null}>
        <directionalLight />
        <ambientLight color={0x7f7f7f} />
        <Model />
        <Dolly />
      </Suspense>
    </Canvas>
  );
}

function App() {

  return (
    <body>
      <div className="App">
        <Scene />
      </div>
    </body>
  );
}

export default App;
