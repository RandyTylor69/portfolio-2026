import { Canvas } from "@react-three/fiber";
import { Model } from "../../Model";

export default function Computer() {
  return (
    <section className="w-100 h-80 flex justify-center items-center ">
      <div className="w-full h-full
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
