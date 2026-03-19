import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { IoCopyOutline, IoCheckmark } from "react-icons/io5";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <footer
      className="h-auto w-full max-w-200 flex flex-col justify-around
    p-4 md:p-0 bg-secondary text-primary mb-20"
    >
      <div
        className="border-b-2 border-primary/20 font-display
        h-10 w-full text-xl mb-12"
      >
        <h1>03 Contact</h1>
      </div>

      <div className="flex gap-6 flex-col font-article">
        <p className="text-primary/50 font-light">
          Please reach out! I'd love to connect :)
        </p>

        <div className="flex gap-2 items-center ">
          <p className="">E-mail: </p>
          <span className="bg-white/5 p-1 rounded-md font-light">
            ziyinmao2006 [at] gmail [dot] com
          </span>

          <button
            onClick={copy}
            className="cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-250 ease-out"
          >
            <AnimatePresence mode="wait" initial={false}>
              {copied ? (
                <motion.span
                  key="checkmark"
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="flex font-light justify-center items-center gap-1"
                >
                  Copied <IoCheckmark />
                </motion.span>
              ) : (
                <motion.span
                  key="copy"
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <IoCopyOutline />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
        <a
          href="https://github.com/RandyTylor69"
          className="underline max-w-14"
          target="_blank"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/ziyin-mao-2414752a8/"
          className="underline max-w-16"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

const variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};
