import { RxCross1 } from "react-icons/rx";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
export default function Umoja() {
  return (
    <div
      className="min-h-screen h-full w-screen bg-secondary text-primary
  flex justify-center items-center px-4 font-article"
    >
      <article
        className="min-h-screen w-200 max-w-200
      flex flex-col justify-start items-center "
      >
        <nav
          className="h-24 w-full text-primary/50
        flex justify-start items-center text-2xl"
        >
          <Link
            to="/"
            className="transition-transform hover:rotate-90 duration-200 ease-out"
          >
            <RxCross1 />
          </Link>
        </nav>
        <header
          className="h-20 w-full mt-12 
        flex justify-between items-start"
        >
          <div classnAme="flex flex-col gap-2">
            <h1 className="text-xl font-bold">Umoja Foundation Group</h1>
            <p className="text-sm text-primary/50">
              FULL-STACK DEVELOPER | 2025
            </p>
          </div>

          <a
            href="https://www.umojafoundationgroup.org/"
            className="flex justify-center items-center w-auto gap-2 text-primary/50 mt-0.5
            hover:underline "
          >
            VIEW <GoArrowUpRight />
          </a>
        </header>
      </article>
    </div>
  );
}
