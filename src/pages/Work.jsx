import Works from "../components/WorkSection/Works";
import Projects from "../components/WorkSection/Projects/Projects";
import { useState, createContext, useEffect } from "react";
import Loading from "../pages/Loading";

export const ThemeContext = createContext();

export default function Work() {
  const [mouseCords, setMouseCords] = useState({ clientX: 0, clientY: 0 });
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1700);
    return () => clearTimeout(timer);
  }, []);
  return (
    <ThemeContext.Provider value={{ mouseCords, setMouseCords }}>
      <main
        className={`w-screen min-h-screen ${loading && `max-h-screen`} overflow-hidden bg-secondary text-primary pt-20
    flex flex-col items-center justify-center font-display relative`}
        onMouseMove={({ clientX, clientY }) => {
          setMouseCords({ clientX: clientX, clientY: clientY });
        }}
      >
        <Loading />
        <Works />
        <Projects />
      </main>
    </ThemeContext.Provider>
  );
}
