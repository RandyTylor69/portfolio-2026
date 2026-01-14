import Computer from "./Computer";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Headline from "../Headline";
export default function Works() {
  return (
    <section
      className="w-full max-w-200 h-200
        flex flex-col justify-center items-center
        "
    >
      <Headline name={"Works"} />

      <Computer />

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        border-2 "
      >
        <article
          className="text-xl md:text-2xl border-b-2 md:border-r-2 md:border-b-2 lg:border-b-0 p-4
          hover:bg-primary hover:text-secondary duration-300 transition ease-out cursor-pointer group"
        >
          Buster's Sea Cove{" "}
          <MdOutlineKeyboardArrowRight className="transform transition-transform group-hover:translate-x-full duration-300 ease-in" />
        </article>
        <article
          className="text-xl md:text-2xl border-b-2 mb:border-r-2 md:border-b-2 lg:border-b-0 lg:border-r-2 p-4
          hover:bg-primary hover:text-secondary duration-300 transition ease-out cursor-pointer group"
        >
          Umoja Foundation Group{" "}
          <MdOutlineKeyboardArrowRight className="transform transition-transform group-hover:translate-x-full duration-300 ease-in" />
        </article>
        <article
          className="text-xl md:text-2xl md:border-r-2 lg:border-r-0 p-4 
          hover:bg-primary hover:text-secondary duration-300 transition ease-out cursor-pointer group"
        >
          Green Sort Western{" "}
          <MdOutlineKeyboardArrowRight className="transform transition-transform group-hover:translate-x-full duration-300 ease-in" />
        </article>
      </div>
    </section>
  );
}
