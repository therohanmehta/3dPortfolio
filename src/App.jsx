
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import { Stars } from '@react-three/drei';
import { Suspense } from "react";

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [0,10,3], fov: 30 }}>
        <color attach="background" args={["#211d1d"]} />
        <Experience />
        <Suspense>
         
          <Stars />
        
     
        </Suspense>   

      </Canvas>
    </>
  );
}

export default App;
