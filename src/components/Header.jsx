import { BsThreeDots } from "react-icons/bs";

export default function Header() {
  return (
    <header
      className="w-screen max-w-200 h-20 flex justify-between items-center backdrop-blur-md p-4
    fixed top-0 z-999 flex-row-reverse border-b-secondary border-b-2"
    >
      <nav
        className="group overflow-hidden
            border-2 h-12 w-12 rounded-4xl 
            relative peer
            duration-300 hover:w-42"
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
          <section
            className=" flex flex-col gap-6 h-18 
          transition-transform transform duration-300 ease-in-out hover:translate-y-12"
          >
            <h1 className="text-red-400">Works</h1>
            <h1 className="">Works</h1>
          </section>
          <section
            className=" flex flex-col gap-6 h-18 
          transition-transform transform duration-300 ease-in-out hover:translate-y-12"
          >
            <h1 className="text-red-400">Connect</h1>
            <h1 className="">Connect</h1>
          </section>
        </div>
      </nav>
      <divT
        className="w-50h-10 flex flex-col justify-between items-left text-[12px]
      uppercase peer-hover:opacity-25 duration-300 ease-in-out"
      >
        <p className="text-primary">Christopher Ziyin Mao</p>
        <p className="text-primary/50">full-stack developer</p>
      </divT>
    </header>
  );
}
