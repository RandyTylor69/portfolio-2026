import { useContext, useState } from "react";
import { OrbitContext } from "../../pages/Connect";

export default function Orbit() {
  const { mouseLocation } = useContext(OrbitContext);
  const rotateX = (mouseLocation.y - window.innerHeight / 2) * 0.02;

  return (
    <div
      className=" w-full md:h-full md:w-80 md:mr-15
         flex justify-center items-center"
      style={{
        transformStyle: "preserve-3d",
        transform: `rotateX(${rotateX - 8}deg)`,
      }}
    >
      <div
        className="h-80 aspect-square relative animate-orbiting"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {photos.map((p, i) => (
          <img
            key={i}
            className={`aspect-square h-40 rounded-2xl border-3 border-secondary
            absolute`}
            style={{
              transform: `translate(50%, 50%) rotateY(${i * 72}deg) translateZ(180px) `,
            }}
            src={`/connect/${i}.png`}
          />
        ))}
      </div>
    </div>
  );
}

const photos = [
  1,2,3,4,5
];
