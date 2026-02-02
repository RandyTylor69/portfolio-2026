import { FaGithub, FaLinkedin, FaPaperclip, } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
export default function Contact() {
  return (
    <div className="w-full max-w-200 h-40 mt-20 md:mt-0 flex justify-center items-center ">
      <div className="w-full max-w-200 flex flex-col border-l-2 border-primary/20">
        <a
          href="https://github.com/RandyTylor69"
          className="w-full h-10 p-4 flex gap-2 items-center"
        >
          GitHub <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/christopher-mao-2414752a8/"
          className="w-full h-10 p-4 flex gap-2 items-center"
        >
          LinkedIn <FaLinkedin />
        </a>
        <a
          href="https://drive.google.com/file/d/1D28j3pMBkgx8MOkD0eF9dD3EWnIA6mAR/view?usp=sharing"
          className="w-full h-10 p-4 flex gap-2 items-center"
        >
          Resume <FaPaperclip />
        </a>
        <a
          href="mailto:ziyinmao2006@gmail.com"
          className="w-full h-10 p-4 flex gap-2 items-center"
        >
          Email <IoIosMail />
        </a>
      </div>
    </div>
  );
}
