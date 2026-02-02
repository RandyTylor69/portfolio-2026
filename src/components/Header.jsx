import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function Header() {
  const d = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      className="w-screen flex justify-center items-center
     h-20 backdrop-blur-md fixed top-0 z-999 border-b-secondary border-b-2"
    >
      <nav
        className="
      max-w-200 w-full flex justify-between items-center  p-4 
      text-primary flex-row-reverse"
      >
        <div
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
            <Link
              to="/"
              className=" flex flex-col gap-6 h-18 cursor-pointer
          transition-transform transform duration-300 ease-in-out hover:translate-y-12"
            >
              <h1 className="text-red-400">Work</h1>
              <h1 className="">Work</h1>
            </Link>
            <Link
              to="/connect"
              className=" flex flex-col gap-6 h-18 cursor-pointer
          transition-transform transform duration-300 ease-in-out hover:translate-y-12"
            >
              <h1 className="text-red-400">Connect</h1>
              <h1 className="">Connect</h1>
            </Link>
          </div>
        </div>
        <Link
          to={"/"}
          className="w-50 h-10 flex flex-col justify-between items-left text-[12px]
      uppercase peer-hover:opacity-25 duration-300 ease-in-out  "
        >
          <p className="text-primary">Ziyin Mao</p>
          <p className="text-primary/50">full-stack developer</p>
        </Link>
      </nav>
    </div>
  );
}
