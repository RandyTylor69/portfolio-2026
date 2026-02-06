import { useContext, useState } from "react";
import { OrbitContext } from "../../pages/Connect";

export default function Orbit() {
  const { mouseLocation } = useContext(OrbitContext);
  const rotateX = (mouseLocation.y - window.innerHeight / 2) * 0.02;

  return (
    <div
      className=" aspect-square w-[40%]
    flex justify-center items-center"
    >
      <div
        className="h-40 aspect-square relative"
        style={{
          transformStyle: "preserve-3d",
          perspective: "1500px",
          transform: `rotateX(${rotateX}deg)`,
          willChange: "transform"
        }}
      >
        {photos.map((p, i) => (
          <img
            key={i}
            className={`aspect-square h-full rounded-2xl border-2 border-secondary
            absolute left-[50%] top-[50%] animate-orbiting`}
            style={{ "--index": i }}
            src={`/connect/${i}.svg`}
          />
        ))}
      </div>
    </div>
  );
}

const photos = [
  { color: "green" },
  { color: "red" },
  { color: "blue" },
  { color: "orange" },
  { color: "purple" },
];
