import Works from "../components/WorkSection/Works";
import Projects from "../components/WorkSection/Projects/Projects";
import { useState, createContext } from "react";

export const ThemeContext = createContext();

export default function Work() {
  const [mouseCords, setMouseCords] = useState({ clientX: 0, clientY: 0 });
  return (
    <ThemeContext.Provider value={{ mouseCords, setMouseCords }}>
      <main
        className="w-screen h-full bg-secondary text-primary pt-20
    flex flex-col items-center justify-center font-display"
        onMouseMove={({ clientX, clientY }) => {
          setMouseCords({ clientX: clientX, clientY: clientY });
        }}
      >
        <Works />
        <Projects />
      </main>
    </ThemeContext.Provider>
  );
}
