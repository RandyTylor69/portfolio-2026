import Headline from "../../Headline";
import ProjectCard from "./ProjectCard"
export default function Projects() {
  return (
    <section
      className="w-full max-w-200 min-h-300 h-full
                flex flex-col items-center
                p-4 gap-20 sticky top-20"
    >
      <Headline name={"Projects"} />
      <ProjectCard />
    </section>
  );
}
