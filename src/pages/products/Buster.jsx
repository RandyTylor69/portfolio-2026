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
            <h1 className="text-xl font-bold">Buster's Sea Cove</h1>
            <p className="text-sm text-primary/50">
              FULL-STACK DEVELOPER | 2025-26
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
            Buster's Sea Cove offers seafood catering service in Toronto, they
            also have a food truck that tours around the country. As I had
            anticipated, converting their old Wix site to a modern web platform
            would be an arduous task, since our tiny development team was
            immediately confronted with critical routing issues and disputed
            media management, not to mention the disastrous website layout.
          </p>

          <p>
            Thanks to the discovery of caffeine in 1819, I was able to
            successfully migrate Buster's Sea Cove into a tightly packed Next.js
            app, with a complete re-design of its entire layout in Figma for a
            renewed subtlety and delice. After implementing the UI components
            with Tailwind CSS, we're ready to connect with the backend.
          </p>
          <figure className="flex flex-col gap-1">
            <img
              src="/productScreenshots/Buster/home.png"
              alt="Landing page of Buster's Sea Cove"
              className="rounded-2xl"
            />
            <figcaption className="text-primary/50 text-center">
              A freshly shot video of the restaurant dining scene is presented
              to Buster's customers.
            </figcaption>
          </figure>
          <p>
            The restaurant owner specified his need to connect better to his
            customers, so I built a contact form that directly links to Django's
            API endpoint, which takes us to a database handled by SQLite.
          </p>
          <figure className="flex flex-col gap-1">
            <img
              src="/productScreenshots/Buster/contact.png"
              alt="The contact page of Buster's Sea Cove."
              className="rounded-2xl"
            />
            <figcaption className="text-primary/50 text-center">
              The contact page of Buster's Sea Cove.
            </figcaption>
          </figure>
        </main>
      </article>
    </div>
  );
}
