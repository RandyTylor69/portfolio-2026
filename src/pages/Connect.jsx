import AboutMe from "../components/ConnectSection/AboutMe";
import Contact from "../components/ConnectSection/Contact";
import { useState, createContext } from "react";
import Toolkit from "../components/ConnectSection/Toolkit";

export const OrbitContext = createContext();

export default function Connect() {
  const [mouseLocation, setMouseLocation] = useState({ x: 0, y: 0 });
  return (
    <OrbitContext.Provider value={{ mouseLocation }}>
      <main
        onMouseMove={(e) => setMouseLocation({ x: e.clientX, y: e.clientY })}
        className="w-screen min-h-screen p-4 bg-secondary text-primary
    flex flex-col items-center font-display gap-12"
      >
        <AboutMe />
        <Toolkit />
        <Contact />
      </main>
    </OrbitContext.Provider>
  );
}
