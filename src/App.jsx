import { useState, createContext } from "react";
import "./App.css";
import Header from "./components/Header";
import Computer from "./components/Computer";
import Works from "./components/Works";
import Projects from "./components/Projects";
import ProjectsGallery from "./components/ProjectsGallery";

export const ThemeContext = createContext();

function App() {
  const [mouseCords, setMouseCords] = useState({ clientX:0, clientY:0});
  return (
    <ThemeContext.Provider value={{ mouseCords, setMouseCords }}>
      <main
        className="w-screen h-full bg-secondary text-primary
    flex flex-col items-center justify-center font-display"
        onMouseMove={({ clientX, clientY }) => {
          setMouseCords({ clientX: clientX, clientY: clientY });
        }}
      >
        <Header />
        <Works />
        <Projects />
        <ProjectsGallery />
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
