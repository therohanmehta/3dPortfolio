import { Environment, OrbitControls } from "@react-three/drei";
import { RohanModel } from "./RohanModel";
import { useRef, useState } from "react";

function Experience() {
  const groupRef = useRef();
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(-1);
  const [positionZ, setPositionZ] = useState(0);

  const handleScroll = (event) => {
    // Adjust the multiplier based on your desired scrolling speed
    // const scrollMultiplier = 0.1;
    // if (positionX < 2) {
    //   setPositionX(
    //     (prevPositionX) => prevPositionX + event.deltaY * scrollMultiplier
    //   );
    //   setPositionZ(
    //     (prevPositionZ) => prevPositionZ + event.deltaY * scrollMultiplier
    //   );
    // }
    // console.log(prevPositionX);
  };

  return (
    <>
      <OrbitControls />
      <group
        ref={groupRef}
        position={[1, -1, 0]}
        onClick={() => console.log("Clicked")} // Handle click event if needed
        onWheel={handleScroll}
      >
        {/* <Rohan /> */}
        {/* <Model /> */}
        <RohanModel/>
      </group>
      {/* <directionalLight
        position={[-100, -200, 500]}
        color="white"
        intensity={1}
      /> */}
      {/* <Environment preset="Sunset" /> */}
      <ambientLight intensity={2} />
    </>
  );
}

export default Experience;
