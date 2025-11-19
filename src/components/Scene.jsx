import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment, Lightformer } from '@react-three/drei'
import { Suspense } from 'react'
import ChromeText from './ChromeText'
import * as THREE from 'three'

function Scene() {
  return (
    <div style={{
      width: '100%',
      height: '60vh',
      background: 'transparent',
      position: 'relative'
    }}>
      <Canvas
        shadows
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.5,
          outputColorSpace: THREE.SRGBColorSpace
        }}
      >
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />

          {/* High-contrast studio lighting for liquid chrome */}
          <ambientLight intensity={0.2} />

          {/* Key light - strong white specular highlight */}
          <directionalLight
            position={[8, 10, 8]}
            intensity={3}
            color="#ffffff"
            castShadow
            shadow-mapSize={[2048, 2048]}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />

          {/* Fill light - creates secondary highlights */}
          <directionalLight
            position={[-8, 6, -6]}
            intensity={2}
            color="#ffffff"
          />

          {/* Rim light - edge definition */}
          <directionalLight
            position={[0, -5, -8]}
            intensity={1.5}
            color="#ffffff"
          />

          {/* Point lights for specular pops */}
          <pointLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
          <pointLight position={[-10, -5, -10]} intensity={1.2} color="#ffffff" />
          <pointLight position={[0, 15, 5]} intensity={1.5} color="#ffffff" />

          {/* Environment with custom lightformers for chrome reflections */}
          <Environment resolution={512}>
            <Lightformer
              intensity={4}
              rotation-x={Math.PI / 2}
              position={[0, 4, -9]}
              scale={[10, 1, 1]}
            />
            <Lightformer
              intensity={3}
              rotation-x={Math.PI / 2}
              position={[0, 4, -6]}
              scale={[10, 1, 1]}
            />
            <Lightformer
              intensity={2}
              rotation-y={Math.PI / 2}
              position={[-50, 2, 0]}
              scale={[100, 2, 1]}
            />
            <Lightformer
              intensity={2}
              rotation-y={-Math.PI / 2}
              position={[50, 2, 0]}
              scale={[100, 2, 1]}
            />
          </Environment>

          {/* The 3D Chrome Text */}
          <ChromeText text="MELODY" />

          {/* Camera Controls - gentle auto-rotation */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.8}
            minPolarAngle={Math.PI / 2.2}
            maxPolarAngle={Math.PI / 2.2}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Scene
