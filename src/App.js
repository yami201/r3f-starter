import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useControls } from "leva";
const App = () => { 
  const { color } = useControls({
    color : "white"
  })
  return (
    <div className="app">
      <Canvas>
        <OrbitControls makeDefault/>
        <Perf position="top-left"/>
        <color args={[color]} attach="background"/>
        <mesh scale={2}>
          <boxGeometry/>
          <meshNormalMaterial/>
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
