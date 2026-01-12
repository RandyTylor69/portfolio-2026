import { BsThreeDots } from "react-icons/bs";

export default function Header() {
  return (
    <header className="w-screen h-40 flex justify-center items-center border-2 border-green-300">
      <nav
        className="group overflow-hidden
            border-green-300 border-2 h-12 w-12 rounded-4xl text-white
            relative
            duration-300 hover:w-70"
      >
        <h1
          className="absolute group-hover:-translate-x-60 transition-transform duration-300 transform
        ease-in-out 
        top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <BsThreeDots />
        </h1>
        <div
          className="flex gap-4 absolute 
          -top-10 left-1/2 -translate-x-1/2 -translate-y-1/2
          group-hover:translate-y-0
         transition-transform transform duration-300 ease-in-out"
        >
          <section className=" flex flex-col gap-6 h-18 
          transition-transform transform duration-300 ease-in-out hover:translate-y-12">
            <h1 className="text-red-400">Works</h1>
            <h1 className="">Works</h1>
          </section>
          <section className=" flex flex-col gap-6 h-18 
          transition-transform transform duration-300 ease-in-out hover:translate-y-12">
            <h1 className="text-red-400">Projects</h1>
            <h1 className="">Projects</h1>
          </section>
          <section className=" flex flex-col gap-6 h-18 
          transition-transform transform duration-300 ease-in-out hover:translate-y-12">
            <h1 className="text-red-400">Contact</h1>
            <h1 className="">Contact</h1>
          </section>
        </div>
      </nav>
    </header>
  );
}
