import './App.css';
import React, { Suspense} from 'react'
import { Canvas, useLoader } from '@react-three/fiber'

import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrthographicCamera } from 'three';
import { PerspectiveCamera } from 'three';
import { useSpring, animated, config } from 'react-spring';
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

const Controls = () => {
  const { gl, camera } = useThree()
  camera.setFocalLength(10)
  useSpring({
    loop: true,
    from: {
      z: 300
    },
    to: {
      z: 300,
    },
    // onFrame: ({ z }) => {
    //   camera.position.z = z
    // }
  })
  return <OrbitControls target={[0, 0, 0]} args={[camera, gl.domElement]} />
}
function Dolly() {
  // This one makes the camera move in and out
  useFrame(({ clock, camera }) => {
    camera.position.z = 50 + Math.sin(clock.getElapsedTime()) * 30
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
