export default function AboutMe() {
  return (
    <section className="w-full max-w-200 h-100 mt-40 flex flex-col gap-4 md:gap-20 font-article">
      <h1 className="text-4xl font-bold uppercase">ziyin mao</h1>
      <article className="w-full h-80 flex flex-col gap-4 ">
        <div
          className="w-full h-auto md:w-[50%] text-primary/70
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
            Away from the keyboard, I pour my heart in chess, piano, and
            absolute cinema.
          </p>
          <p>
            Currently I study at the University of Western Ontario,
            pursuing a bachlor's degree in Computer Science.
          </p>
        </div>
      </article>
    </section>
  );
}
