import Computer from "./Computer";
import WorkGridItem from "./WorkGridItem";
import { motion, AnimatePresence } from "motion/react";
import { useState, createContext } from "react";
import { Link } from "react-router-dom";

import TypeWriter from "./TypeWriter";

export const ModelScreenContext = createContext();

export default function Works() {
  const [hovered, setHovered] = useState(workData[0]);
  const [currentScreen, setCurrentScreen] = useState(workData[0].screen);
  console.log(currentScreen);
  return (
    <ModelScreenContext.Provider value={{ setCurrentScreen, currentScreen }}>
      <section
        className="w-full max-w-200 h-200 relative
        flex flex-col justify-center items-center px-4 md:px-0
        "
      >
        <div
          className="border-b-2 border-primary/20 font-display
        h-9 w-full text-xl"
        >
          <h1>01 Works</h1>
        </div>

        <Computer />

        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={hovered.company}
            className="md:flex
          justify-start px-5
          w-full max-w-200 h-40 absolute 
          md:top-1/3 lg:top-3/8 left-1/2 -translate-x-1/2"
          >
            <article className="flex flex-col text-primary/50 text-sm max-w-40 gap-2">
              <TypeWriter hovered={hovered} key={hovered.company} />
            </article>
          </motion.div>
        </AnimatePresence>

        <div
          className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3
        gap-4 md:gap-16 font-light"
         
        >
          {workData.map((w, i) => (
            <Link to={w.id} key={i}>
              <WorkGridItem
                key={i}
                company={w.company}
                desc={w.desc}
                hovered={hovered}
                onMouseEnter={() => {
                  setHovered(w);
                  setCurrentScreen(w.screen);
                }}
              />
            </Link>
          ))}
        </div>
      </section>
    </ModelScreenContext.Provider>
  );
}

const workData = [
  {
    company: "Greensort Western",
    id: "greensort-western",
    desc: "A student-led oragnization advocating for sustainability on campus.",
    year: "2026",
    role: "Development Director",
    screen: "/productScreenshots/Greensort/home.png",
  },
  {
    company: "Umoja Foundation Group",
    id: "umoja-foundation-group",
    desc: "A humanitarian non-profit based in Kakamega county, Kenya.",
    year: "2025-2026",
    role: "Full-stack Developer, volunteer",
    screen: "/productScreenshots/Umoja/image1.png",
  },
  {
    company: "Buster's Sea Cove",
    id: "busters-sea-cove",
    desc: "A seafood catering platform operated from Toronto.",
    year: "2026",
    role: "Full-stack Developer, freelance",
    screen: "/productScreenshots/Buster/home.png",
  },
];
