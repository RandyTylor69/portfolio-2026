import { FaReact, FaPython, FaNodeJs, FaFigma, FaJava } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FiFramer } from "react-icons/fi";
import { SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { useState } from "react";

export default function Toolkit() {
  const [hovered, setHovered] = useState(null);
  return (
    <section
      className="w-full max-w-3xl min-h-40 flex flex-col gap-12
  mt-55 md:mt-0"
    >
      <div>
        <h3 className="font-article font-extrabold ">Tools I Work With</h3>
      </div>
      <div className="w-full h-full grid grid-cols-5 grid-rows-2 gap-4 md:gap-12">
        {techs.map((t) => (
          <div
            onMouseEnter={() => setHovered(t.name)}
            onMouseLeave={() => setHovered(null)}
            key={t.id}
            className="w-12 aspect-square rounded-2xl border-2 border-primary/20 hover:border-primary
            text-primary/60 hover:text-primary transition-all duration-200 ease-out
             flex justify-center items-center text-xl drop-shadow-2xl
             hover:translate-y-0.5 relative group"
          >
            <t.icon />
            {hovered == t.name && (
              <div
                className="h-6 w-auto bg-black rounded-2xl text-xs
                opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-out
              absolute -top-8 -translate-x-[50%] left-[50%] py-0.5 px-2"
              >
                <p className="inline-block">{hovered}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

const techs = [
  { id: 1, name: "React", icon: FaReact },
  { id: 2, name: "TypeScript", icon: SiTypescript },
  { id: 3, name: "Node", icon: FaNodeJs },
  { id: 4, name: "Python", icon: FaPython },
  { id: 5, name: "Figma", icon: FaFigma },
  { id: 6, name: "MySQL", icon: GrMysql },
  { id: 7, name: "Motion", icon: FiFramer },
  { id: 8, name: "Java", icon: FaJava },
  { id: 9, name: "MongoDB", icon: SiMongodb },
  { id: 10, name: "Firebase", icon: IoLogoFirebase },
];
