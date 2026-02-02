import { Canvas } from "@react-three/fiber";
import { Model } from "./Model";

export default function Computer() {
  return (
    <section className="w-120 md:w-140 h-100 md:h-120 flex justify-center items-center ">
      <div
        className="w-full h-full
      flex justify-center items-center"
      >
        <Canvas>
          <directionalLight position={[0, 1, 4]} />
          <ambientLight />
          <Model />
        </Canvas>
      </div>
    </section>
  );
}
