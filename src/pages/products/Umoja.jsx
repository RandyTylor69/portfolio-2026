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
            <h1 className="text-xl font-bold">Umoja Foundation Group</h1>
            <p className="text-sm text-primary/50">
              FULL-STACK DEVELOPER | 2025
            </p>
          </div>

          <a
            target="_blank"
            href="https://www.umojafoundationgroup.org/"
            className="flex justify-center items-center w-auto gap-2 text-primary/50 mt-0.5
            hover:underline "
          >
            VIEW <GoArrowUpRight />
          </a>
        </header>
        <main
          className="h-full w-full text-sm text-primary/70
        flex flex-col gap-12"
        >
          <p>
            A friend in Kenya learned about my works in web development and
            introduced me to a local non-profit organization in the Kakamega
            county, near Lake Victoria. Soon I arranged a meeting with the
            organizer{" "}
            <a
              target="_blank"
              href="https://www.facebook.com/michael.ndanyi.2025"
              className="underline text-primary font-semibold"
            >
              Micheal Nadnyi
            </a>
            , by the end of July I found myself building an entire volunteering
            platform in React from scratch, as their old site was quite
            obsolete.
          </p>

          <p>
            Collaborating with{" "}
            <a
              target="_blank"
              href="https://www.umojafoundationgroup.org/"
              className="underline text-primary font-semibold"
            >
              Umoja
            </a>{" "}
            was a meaningful process. The more I learned about the volunteering
            situation in West Africa, the deeper I grew into thinking expanding
            this simple front-end site into a full-stack aplication, where
            authenticated Volunteers could share their thoughts on the site for
            future newcomers. I wasted no time implementing that using Node and
            Express.
          </p>
          <figure className="flex flex-col gap-1">
            <img
              src="/productScreenshots/Umoja/image1.png"
              alt="Landing page of Umoja Foundation Group"
              className="rounded-2xl"
            />
            <figcaption className="text-primary/50 text-center">
              Visitors are welcomed with a photograph of the children that Umoja
              takes care of.{" "}
            </figcaption>
          </figure>
          <figure className="flex flex-col gap-1">
            <img
              src="/productScreenshots/Umoja/image2.png"
              alt="Activities of Umoja Foundation Group"
              className="rounded-2xl"
            />
            <figcaption className="text-primary/50 text-center">
              Volunteers could engage in various community-oriented activities,
              such as farming.
            </figcaption>
          </figure>
        </main>
      </article>
    </div>
  );
}
