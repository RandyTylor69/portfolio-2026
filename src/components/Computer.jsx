import { Canvas } from "@react-three/fiber";
import { Model } from "../Model";

export default function Computer() {
  return (
    <section className="w-screen h-screen">
      <Canvas>
        <directionalLight position={[0, 0, 2]} />
        <ambientLight />
        <Model />
      </Canvas>
    </section>
  );
}
