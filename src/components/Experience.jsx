import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import { Rohan } from "./RohanModel";

function Experience() {
  return (
    <>
      <OrbitControls enableRotate />
{/* <ScrollControls pages={3}/> */}
      <group position-y={-2.5} scale={2} >
        <Rohan />
      </group>
      {/* <directionalLight position={[100, 200,500]} color="white" intensity={10} /> */}
      {/* <Environment preset="Sunset" /> */}
      <ambientLight intensity={2} />
      
    </>
  );
}

export default Experience;
