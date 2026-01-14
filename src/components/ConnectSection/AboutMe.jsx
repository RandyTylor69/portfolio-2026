import Headline from "../Headline";
export default function AboutMe() {
  return (
    <section className="w-full max-w-200 h-100 md:mt-60 flex flex-col gap-4 md:gap-20 ">
      <Headline name={"Christopher Ziyin Mao"}/>
      <article className="w-full h-80 flex flex-col gap-4 ">
        <p>
          I'm a full-stack developer specialized in front-end engineering,
          building high-performance web platforms with React and TypeScript
          since 2024. I frequently collaborate with other talented developers to
          prototype and deliver amazing full-stack solutions.
        </p>

        <p>
          Away from the keyboard, I pour my heart in chess, piano, and absolute
          cinema. I'm an undergraduate student at the University of Western
          Ontario, currently pursuing a bachlor's degree in Computer Science.
        </p>
      </article>
    </section>
  );
}
