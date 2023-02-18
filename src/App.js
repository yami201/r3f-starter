import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useControls } from "leva";
const App = () => { 
  const { color } = useControls({
    color : "red"
  })
  return (
    <div className="app">
      <Canvas>
        <OrbitControls makeDefault/>
        <Perf position="top-left"/>

        <mesh scale={2}>
          <boxGeometry/>
          <meshBasicMaterial color={color}/>
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
