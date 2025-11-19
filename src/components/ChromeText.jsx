import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text3D, Center } from '@react-three/drei'

function ChromeText({ text = 'MELODY' }) {
  const textRef = useRef()

  // Gentle floating animation
  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.05
    }
  })

  return (
    <Center>
      <Text3D
        ref={textRef}
        font="https://threejs.org/examples/fonts/helvetiker_bold.typeface.json"
        size={1.8}
        height={0.5}
        curveSegments={32}
        bevelEnabled={true}
        bevelThickness={0.2}
        bevelSize={0.12}
        bevelOffset={0}
        bevelSegments={20}
      >
        {text}
        {/* Chrome material with high metalness and low roughness */}
        <meshStandardMaterial
          color="#ffffff"
          metalness={1.0}
          roughness={0.02}
          envMapIntensity={3}
        />
      </Text3D>

      {/* Shadow plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <shadowMaterial opacity={0.3} />
      </mesh>
    </Center>
  )
}

export default ChromeText
