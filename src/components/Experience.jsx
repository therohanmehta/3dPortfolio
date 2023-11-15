import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Rohan } from "./RohanModel";

function Experience() {
  return (
    <>
      <OrbitControls enableRotate />
{/* <ScrollControls pages={3}/> */}
      <group position-y={-1}>
        <Rohan />
      </group>

      <ambientLight intensity={2} />
    </>
  );
}

export default Experience;
