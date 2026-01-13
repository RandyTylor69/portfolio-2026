export default function Projects() {
  return (
    <section
      className="w-full max-w-200 h-full mt-20
                flex flex-col justify-center items-center
                p-8 gap-8"
    >
      <h1 className="text-6xl md:text-8xl lg:text-9xl">Projects</h1>
      <div className="w-full h-full flex flex-col border-t-2 border-r-2 border-l-2 ">
        <div className="w-full h-10 flex justify-end items-center px-4">
          <p className="font-light text-xs md:text-md italic ">
            I can make birds levitate, but no one cares.
          </p>
        </div>
        <div className="w-full h-full flex flex-col">
          {/** ------- FIRST PROJECT -------- */}

          <div className="w-full min-h-80 flex flex-col md:flex-row border-y-2">
            <article
              className="w-full min-h-80 p-8 flex flex-col justify-center items-center gap-2
            "
            >
              <h1 className="text-xl md:text-2xl font-semibold w-full">
                Social Piano Catalogue
              </h1>
              <p className="font-light italic">
                A platform for piano lovers to review, share, and talk about
                their favourite pieces.
              </p>
            </article>
            <div className="inset-0 min-h-80 w-full  bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[32px_32px]"></div>
          </div>

          {/** ------- Second PROJECT -------- */}

          <div className="w-full min-h-80 flex flex-col md:flex-row border-b-2">
            <div className="inset-0 min-h-80 w-full  bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
            <article
              className="w-full  min-h-80 p-8 flex flex-col justify-center items-center gap-2
            "
            >
              <h1 className="text-xl md:text-2xl font-semibold w-full">
                A Blog of One's Own
              </h1>
              <p className="font-light italic">
                Full-stack dev blog implemented with a RESTful API, updated
                regularly to document the code written by Yours Truly.
              </p>
            </article>
          </div>

          {/** ------- Third PROJECT -------- */}

          <div className="w-full min-h-80 flex flex-col md:flex-row border-b-2">
            <article
              className="w-full  min-h-80 p-8 flex flex-col justify-center items-center gap-2
            "
            >
              <h1 className="text-xl md:text-2xl font-semibold w-full">
                Social Piano Catalogue
              </h1>
              <p className="font-light italic">
                A platform for piano lovers to review, share, and talk about
                their favourite pieces.
              </p>
            </article>
            <div className="inset-0 min-h-80 w-full  bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[32px_32px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
