import { useGLTF } from '@react-three/drei'
import { useThree, useFrame } from '@react-three/fiber'
import { useState } from 'react'

const Dog = (props) => {
  const { nodes, materials } = useGLTF('/vixelDog/scene.gltf')
  const [rotationSpeed] = useState(0.7)

  // Получаем текущие параметры сцены и камеры
  const { camera, scene } = useThree()

  // Установим начальное положение и ориентацию камеры
  camera.position.set(4, 4, 5) //Начальная позиция камеры
  camera.lookAt(0, 0, 0)

  // Изменим масштаб объекта
  const scale = 0.6 // Устанавливаем масштаб
  scene.scale.set(scale, scale, scale)

  // Используем хук useFrame для управления анимацией вращение
  useFrame(() => {
    scene.rotation.y += rotationSpeed // используя useState зажали параметры вращения
  })

  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.8, -0.01]} rotation={[-1.566, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Object_4.geometry}
            material={materials.palette}
            position={[3.686, 0, 0]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.Object_6.geometry}
            material={materials['Material.001']}
            position={[-3.399, 0, -2.954]}
            scale={[7.05, 1, 7.05]}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/vixelDog/scene.gltf')
export default Dog
