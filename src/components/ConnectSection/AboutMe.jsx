import Orbit from "./Orbit";

export default function AboutMe() {
  return (
    <section className="w-full max-w-200 h-100 mt-40 flex flex-col gap-20 md:gap-4 font-article">
      <h1 className="text-4xl font-bold uppercase h-8 w-full inline-block">ziyin mao</h1>
      <article
        className="w-full h-200 md:h-80 flex flex-col md:flex-row md:justify-between items-center gap-12
       "
      >
        <div
          className="w-full h-auto md:w-[45%] text-primary/70
        flex flex-col gap-8"
        >
          <p>
            I'm a full-stack developer specialized in front-end engineering,
            shipping high-performance web platforms with{" "}
            <span className="text-primary font-semibold">React</span> and{" "}
            <span className="text-primary font-semibold">TypeScript</span> since
            2024. I frequently collaborate with other talented developers to
            prototype and deliver amazing full-stack solutions.
          </p>
          <p>
            Away from the keyboard, I spend time on chess, piano, and
            crocheting with my mom.
          </p>
          <p>
            I study at Western University, pursuing a bachlor's degree in
            Computer Science.
          </p>
        </div>
        <Orbit />
      </article>
    </section>
  );
}
