import ProjectCard from "./ProjectCard";

export default function ProjectsGallery() {
  const projects = [
    {
      imgURL: "./ProjectCardCovers/Jazz.png",
      title: "defiant jazz",
      body: "Social musical platform where piano lovers catalogue, share, review, and follow each other's favourite pieces.",
      url: "https://github.com/RandyTylor69/defiant-jazz",
      rotation: "rotate-2",
    },
    {
      imgURL: "./ProjectCardCovers/blog.png",
      title: "a blog of one's own",
      body: "Full-stack dev blog implemented with a RESTful API, updated regularly to document the code written by Yours Truly.",
      url: "https://github.com/RandyTylor69/personal-blog-app",
      rotation: "-rotate-2",
    },
  ];

  return (
    <div className="w-screen h-290 md:h-450 flex flex-col justify-center items-center gap-12">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          ImgURL={project.imgURL}
          title={project.title}
          body={project.body}
          URL={project.url}
          rotation={project.rotation}
        />
      ))}
    </div>
  );
}
