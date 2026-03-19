import AboutMe from "../components/ConnectSection/AboutMe";
import { useState, createContext } from "react";
import Toolkit from "../components/ConnectSection/Toolkit";

export const OrbitContext = createContext();

export default function Connect() {
  const [mouseLocation, setMouseLocation] = useState({ x: 0, y: 0 });
  return (
    <OrbitContext.Provider value={{ mouseLocation }}>
      <main
        onMouseMove={(e) => setMouseLocation({ x: e.clientX, y: e.clientY })}
        className="w-screen h-auto p-4 md:p-0 bg-secondary text-primary
    flex flex-col items-center font-display gap-12 mb-12"
      >
        <AboutMe />
        <Toolkit />
      </main>
    </OrbitContext.Provider>
  );
}
