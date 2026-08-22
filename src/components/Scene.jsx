import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment, Lightformer } from '@react-three/drei'
import { Suspense, useState, useEffect } from 'react'
import ChromeText from './ChromeText'
import LiquidEther from './LiquidEther'
import * as THREE from 'three'

function Scene() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check for dark mode on mount
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark-mode'))
    }

    checkDarkMode()

    // Listen for dark mode changes
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div style={{
      width: '100%',
      height: '60vh',
      background: 'transparent',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      {/* LiquidEther Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0
      }}>
        <LiquidEther
          colors={isDark ? ['#3d1f7a', '#7a1f5e', '#5e2f7a'] : ['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Three.js Canvas with Chrome Text */}
      <Canvas
        shadows
        gl={{
          antialias: true,
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.5,
          outputColorSpace: THREE.SRGBColorSpace
        }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={50} />

          {/* Lighter, shimmery studio lighting for white background */}
          <ambientLight intensity={0.5} />

          {/* Key light - softer for white background */}
          <directionalLight
            position={[8, 10, 8]}
            intensity={2}
            color="#ffffff"
            castShadow
            shadow-mapSize={[2048, 2048]}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />

          {/* Fill light - creates shimmer */}
          <directionalLight
            position={[-8, 6, -6]}
            intensity={1.5}
            color="#ffffff"
          />

          {/* Rim light - subtle edge highlights */}
          <directionalLight
            position={[0, -5, -8]}
            intensity={1}
            color="#ffffff"
          />

          {/* Point lights for shimmer effect */}
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
          <pointLight position={[-10, -5, -10]} intensity={1} color="#ffffff" />
          <pointLight position={[0, 15, 5]} intensity={1.2} color="#ffffff" />

          {/* Environment with softer lightformers for lighter chrome */}
          <Environment resolution={512}>
            <Lightformer
              intensity={3}
              rotation-x={Math.PI / 2}
              position={[0, 4, -9]}
              scale={[10, 1, 1]}
            />
            <Lightformer
              intensity={2.5}
              rotation-x={Math.PI / 2}
              position={[0, 4, -6]}
              scale={[10, 1, 1]}
            />
            <Lightformer
              intensity={1.5}
              rotation-y={Math.PI / 2}
              position={[-50, 2, 0]}
              scale={[100, 2, 1]}
            />
            <Lightformer
              intensity={1.5}
              rotation-y={-Math.PI / 2}
              position={[50, 2, 0]}
              scale={[100, 2, 1]}
            />
          </Environment>

          {/* The 3D Chrome Text */}
          <ChromeText text="MELODY" />

          {/* Camera Controls - no rotation, just viewing */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Scene
