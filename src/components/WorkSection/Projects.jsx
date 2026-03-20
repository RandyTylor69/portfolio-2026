export default function Projects() {
  return (
    <section
      className="w-full max-w-200 h-auto
                flex flex-col items-center md:mt-12
                p-4 md:p-0 sticky mb-20 gap-12"
    >
      <div
        className="border-b-2 border-primary/20 font-display
        h-10 w-full text-xl"
      >
        <h1>02 Projects</h1>
      </div>

      <div
        className="w-full h-auto gap-12 flex flex-col justify-between
      font-article"
      >
        {projects.map((project) => (
          <div className="w-full h-auto flex flex-col  font-light">
            {/* top row with project name and date */}
            <div className="w-full h-auto flex justify-between">
              <a href={project.link} className="hover:underline">
                {project.name}
              </a>
              <p className="text-primary/50">{project.date}</p>
            </div>
            {/* bottom row with project description*/}
            <p className="text-primary/50">{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const projects = [
  {
    date: "2026.02",
    name: "Personal Journal",
    desc: "Lifelog and digital playground.",
    imageURL: "/ProjectCardCovers/Blog.png",
    link: "https://maojournal.vercel.app/",
  },

  {
    date: "2025.11",
    name: "Social Catalogue Service",
    desc: "Platform for piano lovers.",
    imageURL: "/ProjectCardCovers/Social.jpg",
    link: "https://defiant-jazz.firebaseapp.com/",
  },
  {
    date: "2025.07",
    name: "Visual Drum Sequencer",
    desc: "16-step beat maker with a custom archive.",
    imageURL: "/ProjectCardCovers/Sequencer.gif",
    link: "https://beats-maker-app.vercel.app/",
  },
];
