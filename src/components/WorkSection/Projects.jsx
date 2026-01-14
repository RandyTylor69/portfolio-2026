import Headline from "../Headline";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      className="w-full max-w-200 h-40
                flex flex-col justify-center items-center
                p-8 gap-8 sticky top-20"
    >
      <Headline name={"Projects"} />
    </section>
  );
}
