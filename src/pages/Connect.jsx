import { useState } from "react";
import AboutMe from "../components/ConnectSection/AboutMe";
import Contact from "../components/ConnectSection/Contact";

export default function Connect() {
  return (
    <main
      className="w-screen p-8 h-screen bg-secondary text-primary
    flex flex-col items-center justify-center font-display gap-40 md:gap-0"
    >
      <AboutMe />
      <Contact />
    </main>
  );
}
