import {
    OrbitControls,
    PivotControls, 
    Text,
    Float,
    MeshReflectorMaterial,
    Stars,
} from "@react-three/drei"
import { useRef } from "react"
import { DoubleSide } from "three"

export default function Experience() {
    const cubeRef = useRef()
    const sphereRef = useRef()


    return (
    <>
        <Stars radius={20} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <OrbitControls makeDefault />
        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <PivotControls anchor={[0, 1, 0]} scale={1}>
            <mesh position-x={ - 6 } ref={sphereRef}>
                <sphereGeometry />
                <meshStandardMaterial color="#A9C8EB" />
            </mesh>
        </PivotControls>

        <PivotControls anchor={[0, 1, 0]}>
            <mesh position-x={ 6 } scale={ 1.5 } ref={cubeRef}>
                <boxGeometry />
                <meshStandardMaterial color="#A9C8EB" />
            </mesh>
        </PivotControls>
        

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 25 }>
            <planeGeometry />
            <MeshReflectorMaterial
                color="#13D2F0"
                resolution={512}
                blur={[1000, 1000]}
                muxBlur={0.5}
                mirror={0.4}
                
            />
        </mesh>

        

        <Float>
            <mesh
                position={[-0.4, 3, -3.5]}
                scale={10}
            >
                <planeGeometry />
                <meshStandardMaterial 
                    color='#242B2C'
                    side={DoubleSide}
                />
            </mesh>
            <Text
                position={[0, 4, -3]}
                color="#E6AA29"
                maxWidth={10}
            >
                Learning Three JS.
                with React as a base.
                Calm mind, busy hands. 
            </Text>
            <Text
                position={[-1.6, 0.5, -3]}
                color="#F1E7C9"
                maxWidth={10}
            > 
                -Russel Mueller
            </Text>
        </Float>
    </>
        )
}