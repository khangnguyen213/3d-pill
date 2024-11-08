import {
  Box,
  Capsule,
  Environment,
  MeshTransmissionMaterial,
  OrbitControls
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import './styles.css'
import DNA from './DNA'

function Scene() {
  return (
    <>
      <Canvas>
        <color args={['#d1e2ef']} attach="background" />
        <Capsule args={[0.9, 2.5, 4, 32]}>
          <MeshTransmissionMaterial
            thickness={0}
            anisotropy={0.25}
            ior={1.3}
            color={'#c3e9ff'}
            clearcoat={1}
            roughness={0.05}
            iridescence={2.5}
            iridescenceIOR={1.55}
            chromaticAberration={0.15}
            anisotropicBlur={0.1}
          />
        </Capsule>
        <Suspense>
          <DNA scale={0.105} position={[0, -1.7, -0.45]} />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </>
  )
}

export default Scene
