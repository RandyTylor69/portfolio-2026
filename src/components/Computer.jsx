import { Canvas } from "@react-three/fiber";
import { Model } from "../Model";

export default function Computer() {
  return (
    <section className="size-full flex justify-center items-center">
      <div className="size-100 
      flex justify-center items-center">
        <Canvas>
          <directionalLight position={[0, 1, 4]} />
          <ambientLight />
          <Model />
        </Canvas>
      </div>
    </section>
  );
}
