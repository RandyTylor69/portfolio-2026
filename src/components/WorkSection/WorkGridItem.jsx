import { motion} from "motion/react";
export default function Work({
  company,
  desc,
  hovered,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <article
      className="flex flex-col relative h-full w-full p-3 cursor-pointer font-article"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {hovered && hovered.company == company && (
       
          <motion.div
            layoutId="WorkHover"
            
            className="bg-white/5 absolute h-full w-full top-0 left-0 rounded-2xl z-10"
          />
       
      )}

      <h3 className="font-semibold">{company}</h3>
      <p className="text-primary/50">{desc}</p>
    </article>
  );
}
