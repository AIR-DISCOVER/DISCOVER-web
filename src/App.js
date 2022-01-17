import './App.css';
import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'

import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model = () => {
  const gltf = useLoader(GLTFLoader, "./duck.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={1} />
    </>
  );
};
function App() {
  return (
    <body>
      <div className="App">
        <Canvas className='Canvas'>
          <Suspense fallback={null}>
            {/* <pointLight position={[10, 10, 10]} /> */}
            <directionalLight />
            <ambientLight color={0x7f7f7f}/>
            <Model />
            <OrbitControls />
            {/* <Environment preset="sunset" background /> */}
          </Suspense>
        </Canvas>
      </div>
    </body>
  );
}

export default App;
