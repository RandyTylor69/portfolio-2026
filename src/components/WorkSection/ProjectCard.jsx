import { FaGithub } from "react-icons/fa";
export default function ProjectCard({ ImgURL, title, body, rotation, URL }) {
  return (
    <article
      className={`w-80 md:w-120 h-130 md:h-180 bg-primary drop-shadow-2xl
        flex flex-col border-2 border-primary rounded-2xl ${rotation}`}
    >
      {/** ---- img ---- */}
      <div className="w-full h-[60%] md:h-[65%] ">
        <img src={ImgURL} className="bg-cover rounded-2xl border-2 text-secondary" />
      </div>
      {/** ----  article ---- */}
      <div
        className="w-full h-[40%] md:h-[35%] flex flex-col justify-around items-center 
      p-4 text-secondary"
      >
        <h2 className="text-xl uppercase">{title}</h2>
        <p className="text-center text-sm">{body}</p>
        <section
          className="w-full h-20 
            flex justify-center items-center gap-4"
        >
          <div className="h-6 md:h-8 w-auto ">
            <button
              className="absolute transition-transform cursor-pointer
                h-6 md:h-8 w-auto -translate-y-1 bg-primary z-3 rounded-2xl
                border-2 border-secondary hover:translate-y-0 ease-out
                flex justify-center items-center"
            >
              <a
              target="_blank"
                href={URL}
                className="text-[11px] md:text-[16px] w-48 flex
              justify-around items-center"
              >
                VIEW ON GITHUB <FaGithub />
              </a>
            </button>
            <div className=" h-6 md:h-8 w-48 bg-secondary rounded-2xl "></div>
          </div>
        </section>
      </div>
    </article>
  );
}
