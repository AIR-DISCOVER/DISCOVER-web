import './App.css';
import React, { forwardRef, Suspense, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import ResponsiveAppBar from './components/layouts/Header';
import { makeStyles } from '@mui/styles';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { OrthographicCamera } from 'three';
import { Box, Button, Grid } from '@mui/material';
import { PerspectiveCamera } from 'three';
import {
  Link,
  BrowserRouter,
  HashRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Blog from './blog/Blog';
import Home from './home/Home';

function App() {
  const [posts, setPosts] = useState({})
  useEffect(() => {
    fetch('/resources/research/posts.json')
      .then((res) => {
        res.text()
          .then((json) => {
            setPosts(JSON.parse(json));
            console.log(json)
          })
      })
      .catch((err) => { console.log(err) });
  }, []);
  return (
    <HashRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="home" element={<Navigate to="research" replace />} />
        <Route path="news" element={<Navigate to="research" replace />} />
        <Route path="research">
          <Route index element={<Navigate to="hci" replace />} />
          {posts.hci &&
            <Route path="hci">
              <Route index element={<Navigate to={posts.hci[0].replace(/\s+/g, '-')} replace />} />
              {posts.hci.map((post) =>
                <Route path={post.replace(/\s+/g, '-')} element={<Blog group={'hci'} name={post} />} />
              )}
            </Route>
          }
          {posts.sun &&
            <Route path="sun">
              <Route index element={<Navigate to={posts.sun[0].replace(/\s+/g, '-')} replace />} />
              {posts.sun.map((post) =>
                <Route path={post.replace(/\s+/g, '-')} element={<Blog group={'sun'} name={post} />} />
              )}
            </Route>
          }
          <Route path="*" element={<Blog group={'null'} name={'null'} />} />
        </Route>
        <Route path="people" element={<Navigate to="research" replace />} />
        <Route path="joinus" element={<Navigate to="research" replace />} />
        <Route path="about" element={<Navigate to="research" replace />} />
        <Route path="*" element={<Navigate to="" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
