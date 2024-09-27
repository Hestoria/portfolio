import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { ReactNode, useRef } from "react";

export interface Props {
  children: ReactNode;
}

const Easing: React.FC<Props> = ({ children }) => {
  const group = useRef<any>(null);

  useFrame((state, delta) => {
    // easing.damp3(state.camera.position, [0, 0, 8], 0.25, delta);

    easing.dampE(
      group.current.rotation,
      [-state.pointer.y / 6, state.pointer.x / 3, 0],
      0.35,
      delta
    );
  });

  return <group ref={group}>{children}</group>;
};

export default Easing;
