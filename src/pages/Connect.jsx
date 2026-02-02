import { useState } from "react";
import AboutMe from "../components/ConnectSection/AboutMe";
import Contact from "../components/ConnectSection/Contact";

export default function Connect() {
  return (
    <main
      className="w-screen min-h-screen h-full p-4  bg-secondary text-primary
    flex flex-col items-center font-display gap-12"
    >
      <AboutMe />
      <Contact />
    </main>
  );
}
