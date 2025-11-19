import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text3D, Center, Environment, ContactShadows } from '@react-three/drei'
import LiquidEther from './LiquidEther'

function GlossierText() {
  const melodyRef = useRef()
  const yangRef = useRef()

  // Faster floating animation
  useFrame((state) => {
    if (melodyRef.current) {
      melodyRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.1 + 1.2
    }
    if (yangRef.current) {
      // Offset the phase slightly so they bob differently
      yangRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5 + 0.5) * 0.1 - 2.2
    }
  })

  return (
    <>
      
      <Center>
        <group>
          {/* Melody */}
          <Text3D
            ref={melodyRef}
            font="https://threejs.org/examples/fonts/helvetiker_bold.typeface.json"
            letterSpacing={1.2}    // Increased letter spacing
            position={[-1, 0, 0]}  // More space between words

            size={2.5}             
            height={0.03}          
            curveSegments={64}
            bevelEnabled={true}
            bevelThickness={0.6}   
            bevelSize={0.4}        
            bevelOffset={0}
            bevelSegments={32}
          >
            Melody

            <meshStandardMaterial
              color="#ffffff"
              metalness={1.0}
              roughness={0.02}
              envMapIntensity={3.5}
            />
          </Text3D>

          {/* Yang */}
          <Text3D
            ref={yangRef}
            font="https://threejs.org/examples/fonts/helvetiker_bold.typeface.json"
            position={[1, -4.2, 0]}  // More space between words
            letterSpacing={1.2}      // Increased letter spacing
            
            size={2.5}
            height={0.03}
            curveSegments={64}
            bevelEnabled={true}
            bevelThickness={0.6}
            bevelSize={0.4}
            bevelOffset={0}
            bevelSegments={32}
          >
            Yang

            <meshStandardMaterial
              color="#ffffff"
              metalness={1.0}
              roughness={0.02}
              envMapIntensity={3.5}
            />
          </Text3D>
        </group>
      </Center>

      <Environment preset="city" />

      <ContactShadows
        position={[0, -3, 0]}
        opacity={0.2}
        scale={30}
        blur={2.5}
        far={4}
        color="#ffb3d9"
      />

      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, 5, -5]} intensity={0.5} />
      <ambientLight intensity={0.3} />
    </>
  )
}

export default GlossierText