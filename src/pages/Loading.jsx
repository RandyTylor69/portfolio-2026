import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const { progress } = useProgress();
  
  return (
    <Html center>
        <div className="w-full h-full bg-secondary">
            <p>{Math.round(progress)}%</p>
        </div>
    </Html>
  );
}
