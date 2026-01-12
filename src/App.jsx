import { useState, createContext } from "react";
import "./App.css";
import Header from "./components/Header";
import Computer from "./components/Computer";

export const ThemeContext = createContext();

function App() {
  const [mouseCords, setMouseCords] = useState({ clientX:0, clientY:0});
  console.log(mouseCords.clientX, mouseCords.clientY)
  return (
    <ThemeContext.Provider value={{ mouseCords, setMouseCords }}>
      <main
        className="w-screen h-screen bg-gray-800
    flex flex-col justify-between"
        onMouseMove={({ clientX, clientY }) => {
          setMouseCords({ clientX: clientX, clientY: clientY });
        }}
      >
        <Header />
        <Computer />
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
