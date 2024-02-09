"use client";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import { Stars, Environment } from "@react-three/drei";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 0, 30], fov: 30 }}>
        <color attach="background" args={["#211d1e"]} />
        <Experience />
        <Suspense>
          {/* <Stars /> */}

          {/* <Environment preset="sunset" /> */}
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
