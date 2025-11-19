import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text3D, Center } from '@react-three/drei'

function ChromeText({ text = 'MELODY' }) {
  const textRef = useRef()

  // Gentle floating animation - no rotation
  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15
      textRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.08
    }
  })

  return (
    <Center>
      <Text3D
        ref={textRef}
        font="https://threejs.org/examples/fonts/helvetiker_bold.typeface.json"
        size={1.2}
        height={0.4}
        curveSegments={32}
        bevelEnabled={true}
        bevelThickness={0.15}
        bevelSize={0.1}
        bevelOffset={0}
        bevelSegments={20}
      >
        {text}
        {/* Lighter shimmery chrome material */}
        <meshStandardMaterial
          color="#f0f0f0"
          metalness={0.95}
          roughness={0.15}
          envMapIntensity={2.5}
          emissive="#ffffff"
          emissiveIntensity={0.1}
        />
      </Text3D>

      {/* Shadow plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <shadowMaterial opacity={0.15} />
      </mesh>
    </Center>
  )
}

export default ChromeText
