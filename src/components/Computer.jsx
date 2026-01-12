import { Canvas } from "@react-three/fiber";
import { Model } from "../Model";

export default function Computer() {
  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <div className="size-100 border-green-300 border-2 
      flex justify-center items-center">
        <Canvas>
          <directionalLight position={[0, 1, 2]} />
          <ambientLight />
          <Model />
        </Canvas>
      </div>
    </section>
  );
}
