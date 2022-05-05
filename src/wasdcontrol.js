import { useEffect, useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Vector3 } from 'three'

// Reference to a set of active KeyboardEvent.code entries
const useCodes = () => {
    const codes = useRef(new Set())
    useEffect(() => {
        const onKeyDown = (e) => codes.current.add(e.code)
        const onKeyUp = (e) => codes.current.delete(e.code)
        window.addEventListener('keydown', onKeyDown)
        window.addEventListener('keyup', onKeyUp)
        return () => {
            window.removeEventListener('keydown', onKeyDown)
            window.removeEventListener('keyup', onKeyUp)
        }
    }, [])
    return codes
}

const vec = new Vector3()

// Rotation logic from three/examples/jsm/controls/PointerLockControls.js
export default function WasdControls() {
    const { camera } = useThree()
    const code = useCodes()
    const moveForward = (distance) => {
        vec.setFromMatrixColumn(camera.matrix, 0)
        vec.crossVectors(camera.up, vec)
        camera.position.addScaledVector(vec, distance)
    }
    const moveRight = (distance) => {
        vec.setFromMatrixColumn(camera.matrix, 0)
        camera.position.addScaledVector(vec, distance)
    }
    const moveUp = (distance) => {
        camera.position.addScaledVector(camera.up, distance)
    }
    const turnLeft = (distance) => {
        camera.rotation.y += distance / Math.PI
        // camera.rotation.addScaledVector(camera.up, distance)
    }
    const [speedX, setSpeedX] = useState(0)
    const [speedY, setSpeedY] = useState(0)
    useFrame((_, delta) => {
        const d = code.current.has('ShiftLeft') ? 0.2 : 0.05
        const maxSpeed = 12
        if ((code.current.has('KeyW') ||
            code.current.has('KeyA') ||
            code.current.has('KeyS') ||
            code.current.has('KeyD') ||
            code.current.has('KeyQ') ||
            code.current.has('KeyE'))) { } else {
            setSpeedX(speedX * 0.93)
            setSpeedY(speedY * 0.93)
        }
        if (code.current.has('KeyW') && speedX < maxSpeed) setSpeedX(speedX + d) 
        if (code.current.has('KeyA') && speedY > -maxSpeed) setSpeedY(speedY - d) 
        if (code.current.has('KeyS') && speedX > -maxSpeed) setSpeedX(speedX - d)
        if (code.current.has('KeyD') && speedY < maxSpeed) setSpeedY(speedY + d) 
        if (code.current.has('KeyQ')) turnLeft(d / Math.PI * 2)
        if (code.current.has('KeyE')) turnLeft(-d / Math.PI * 2)
        moveForward(delta * speedX)
        moveRight(delta * speedY)
        console.log(camera.position)
    })
    return null
}
