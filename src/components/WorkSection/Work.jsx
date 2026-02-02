import { motion } from "motion/react";
export default function Work({
  company,
  desc,
  hovered,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <motion.article
      className="flex flex-col relative h-full w-full p-3 cursor-pointer"
      layout
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {hovered && hovered.company == company && (
        <motion.div
          layoutId="WorkHover"
          className="bg-white/5 absolute h-full w-full top-0 left-0 rounded-2xl z-10"
        />
      )}
      <h3 className="font-semibold z-20">{company}</h3>
      <p className="text-primary/50 z-20">{desc}</p>
    </motion.article>
  );
}
