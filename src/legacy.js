import React, { forwardRef, Suspense, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "@react-three/drei";
// import { makeStyles } from '@mui/material/styles';

// import SvgButton from '../components/elements/SvgButton';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Object3D } from 'three';
import WasdControls from './wasdcontrol';
import LookControls from './lookcontrol';

const Model = ({ onLoading }) => {
    const ref = useRef()
    const scenes = useLoader(GLTFLoader,
        [
            "/three/new5.glb",
            // "/three/office1.glb",
            // "/three/office2.glb",
            // "/three/indoor.glb",
        ], null, xhr => {
            onLoading(xhr.loaded / 97888600 * 100)
        });
    const locations =
        [
            [0, -4, 0],
            // [-319, -22.25, -210],
            // [-70.7, -40, -32],
            // [-217.2, -22.25, 93],
        ]
    return (
        <group ref={ref}>
            {scenes.map((scene, idx) => {
                return (<mesh position={locations[idx]} key={idx}>
                    <primitive object={scene.scene} scale={1} />
                </mesh>)
            })}
        </group>
    );
};

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

const ResetDolly = forwardRef((_, ref) => {
    const camera = useThree((state) => state.camera)
    useImperativeHandle(ref, () => ({
        reset: () => { camera.position.set(10.5, 0, 17); camera.rotation.set(0, Math.PI / 6, 0) }
    }))
    return null
})
const ModernDolly = forwardRef((states, ref) => {
    const [trigger, setTrigger] = useState(-1);
    const clock = useThree((state) => state.clock)
    const camera = useThree((state) => state.camera)
    const [fn, setFn] = useState(() => ((t) => [camera.position.x, camera.position.y, camera.position.z, camera.rotation.x, camera.rotation.y, camera.rotation.z]));
    useImperativeHandle(ref, () => ({
        reset: () => { camera.position.set(16.03, 0, -22.15); camera.rotation.set(0, Math.PI / 12 * 19, 0) },
        setF: (target) => {
            var dst = null
            if (target === 'Home') {
                dst = [10.78, 0, 15.72, 0, Math.PI / 4, 0]
            } else if (target === 'Research') {
                dst = [10.15, 0, -8.28, 0, Math.PI / 2, 0]
            } else if (target === 'People') {
                dst = [14.30, 0, -22.14, 0, Math.PI / 3, 0]
            } else if (target === 'News') {
                dst = [9.73, -1, -9.2, 0, Math.PI * 3 / 2, 0]
            } else if (target === 'Programs') {
                dst = [8.17, 0, 6.23, 0, Math.PI * 5 / 12, 0]
            } else if (target === 'About Us') {
                dst = [16.03, 0, -22.15, 0, Math.PI / 12 * 20, 0]
            } else {
                alert("invalid")
            }
            setTrigger(clock.getElapsedTime())
            setFn(() => (
                PathGenerate([
                    camera.position.x,
                    camera.position.y,
                    camera.position.z,
                    camera.rotation.x,
                    camera.rotation.y,
                    camera.rotation.z,
                ], dst)
            ))
        }
    }));
    useFrame((state) => {

        const position = fn((state.clock.getElapsedTime() - trigger) / 2.5)
        state.camera.position.set(position[0], position[1], position[2])
        state.camera.rotation.set(position[3], position[4], position[5])
        state.camera.updateProjectionMatrix();
        // console.log(state.camera.rotation)
    })
    useEffect(() => { camera.position.set(10.78, 0, 15.72); camera.rotation.set(0, Math.PI / 4, 0) }, [])
    return null
})
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
    useFrame((state) => {
        if (states.tab === "Home") {
            state.camera.position.set(3, 0, -8)
            state.camera.rotation.set(0, 0, 0)
            state.camera.position.z = -8 + Math.sin(state.clock.getElapsedTime()) * 1.1
            state.camera.rotation.y = 3 + Math.PI * Math.cos(state.clock.getElapsedTime() * 0.25)
        } else {
            const position = fn((state.clock.getElapsedTime() - trigger) / 1)
            state.camera.position.set(position[0], position[1], position[2])
            state.camera.rotation.set(position[3], position[4], position[5])
            // state.camera.setFocalLength(40 + 10 * Math.sin(state.clock.getElapsedTime() * 2))
        }
        state.camera.updateProjectionMatrix();
        // console.log(state.camera.position)
    })
    return null
})

const AddTarget = (props) => {
    const { scene } = useThree();
    scene.add(props.target);
    return null;
}

const Scene = ({ cref, style, modelCallback = () => { } }) => {
    const targetObject = new Object3D();
    return (
        <Canvas style={{ height: '100vh', ...style }}>
            <Suspense fallback={null}>
                <AddTarget target={targetObject} />
                <directionalLight color={0xffffff} intensity={1} target={targetObject} castShadow={true} />
                <ambientLight color={0xffffff} intensity={0.3} />
                <hemisphereLight color={0xffffff} intensity={0.8} />
                <Model onLoading={modelCallback} />
                {/* <OrbitControls /> */}
                {/* <LookControls /> */}
                {/* <WasdControls /> */}
                <ModernDolly ref={cref} />
                {/* <RefDolly ref={cref} tab={tab} /> */}
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

export default Scene;