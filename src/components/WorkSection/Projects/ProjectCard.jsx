export default function ProjectCard() {
  return (
    <>
      {projects.map((year, i) => (
        <div
          className="w-full h-full gap-8 flex flex-col justify-between relative
          font-article"
          key={i}
        >
          <h3 className="absolute -translate-x-18 hidden md:block font-display">
            {year.year}
          </h3>
          {year.list.map((project, j) => (
            <article
              className="w-full h-full relative
        flex flex-col justify-between group"
              key={j}
            >
              <a className="w-full h-full" href={project.link} target="_blank">
                <img
                  src={project.imageURL}
                  alt={`${project.name}'s example image`}
                  className="w-full h-full
              rounded-2xl mb-2 hover:scale-98 duration-200 cursor-pointer ease-out"
                />
              </a>

              <h3 className="font-semibold">{project.name}</h3>
              <p className="text-primary/50">{project.desc}</p>
            </article>
          ))}
        </div>
      ))}
    </>
  );
}

const projects = [
  {
    year: 2026,
    list: [
      {
        name: "A Blog of One's Own",
        desc: "A full-stack lifelog, as well as a small room full of unserious thoughts.",
        imageURL: "/ProjectCardCovers/Blog.png",
        link :"https://personal-blog-app-tau.vercel.app/"
      },
    ],
  },
  {
    year: 2025,
    list: [
      {
        name: "Social Catalogue Service",
        desc: "Platform for piano lovers to document, share and review favourite pieces.",
        imageURL: "/ProjectCardCovers/Social.jpg",
        link: "https://defiant-jazz.firebaseapp.com/"
      },
      {
        name: "Visual Drum Sequencer",
        desc: "16-step beat maker with a database and a virtual keyboard tucked underneath.",
        imageURL: "/ProjectCardCovers/Sequencer.gif",
        link: "https://beats-maker-app.vercel.app/"
      },
    ],
  },
];
