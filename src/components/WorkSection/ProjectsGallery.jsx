import ProjectCard from "./ProjectCard";
export default function ProjectsGallery() {
  return (
    <div className="w-screen h-440 md:h-600 flex flex-col justify-center items-center gap-12">
      <ProjectCard
        ImgURL={"./ProjectCardCovers/blog.png"}
        title={"a blog of one's own"}
        body={
          "Full-stack dev blog implemented with a RESTful API, updated regularly to document the code written by Yours Truly."
        }
        keywords={["React", "CSS", "MongoDB", "AWS"]}
        rotation={"rotate-2"}
      />

      <ProjectCard
        ImgURL={"./ProjectCardCovers/blog.png"}
        title={"a blog of one's own"}
        body={
          "Full-stack dev blog implemented with a RESTful API, updated regularly to document the code written by Yours Truly."
        }
        keywords={["React", "CSS", "MongoDB", "AWS"]}
        rotation={"-rotate-2"}
      />

      <ProjectCard
        ImgURL={"./ProjectCardCovers/blog.png"}
        title={"a blog of one's own"}
        body={
          "Full-stack dev blog implemented with a RESTful API, updated regularly to document the code written by Yours Truly."
        }
        keywords={["React", "CSS", "MongoDB", "AWS"]}
        rotation={"rotate-2"}
      />
    </div>
  );
}
