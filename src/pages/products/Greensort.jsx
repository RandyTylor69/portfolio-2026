import { RxCross1 } from "react-icons/rx";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
export default function Buster() {
  return (
    <div
      className="min-h-screen h-full w-screen bg-secondary text-primary
  flex justify-center items-center px-4 font-article"
    >
      <article
        className="min-h-screen h-full w-200 max-w-200 mb-20
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
            <h1 className="text-xl font-bold">Greensort Western</h1>
            <p className="text-sm text-primary/50">
              Development Director | 2025-26
            </p>
          </div>

          <p
            className="flex justify-center items-center w-auto gap-2 text-primary/50 mt-0.5
            hover:underline "
          >
            Work In Progress
          </p>
        </header>
        <main
          className="h-full w-full text-sm text-primary/70
        flex flex-col gap-12"
        >
          <p>
            My official title in this project is "Development Director", though
            it feels less like a "leader" but more like a "lead singer", to
            borrow the words of Freddy Mercury. My role is to update the UI
            components and individual web pages of Greensort's website, making
            it more responsive and accessible to univeristy students.
            Essentially, this is where I put my CSS and Framer skills to test.
          </p>

          <p>
            Greeensort is a ecological sustainability student organization in
            Western University. It aims to reduce waste's environmental impact
            by promoting sustainable practices, responsible consumption, and
            recycling initiatives to support a circular economy and a healthier
            future.
          </p>
          <figure className="flex flex-col gap-1">
            <img
              src="/productScreenshots/Greensort/home.png"
              alt="An animated landing page of Greensort."
              className="rounded-2xl"
            />
            <figcaption className="text-primary/50 text-center">
              An animated landing page of Greensort, hover your mouse around to
              see more.
            </figcaption>
          </figure>
          <p>
            I have borrowed many awesome and practical UI design concepts from{" "}
            <a
              target="_blank"
              href="https://emilkowal.ski/"
              className="underline text-primary font-semibold"
            >
              Emil Kowalski
            </a>
            , an acclaimed design engineer. The use of Framer Motion over
            vanilla CSS just to trim off some small awkward animations, for
            example, was what Emil advocated for, and what I followed and
            implemented in Greensort.
          </p>
          <figure className="flex flex-col gap-1">
            <img
              src="/productScreenshots/Greensort/module.png"
              alt="The module page of Greensort."
              className="rounded-2xl"
            />
            <figcaption className="text-primary/50 text-center">
              A module page for students on residences to play mini sorting
              games.
            </figcaption>
          </figure>
        </main>
      </article>
    </div>
  );
}
