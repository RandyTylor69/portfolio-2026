import { useState, useEffect } from "react";

export default function Loading() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`h-screen w-screen bg-black text-primary font-article uppercase
  flex justify-center items-center absolute z-999 top-0 left-0
  transform transition-transform duration-400 ease-[cubic-bezier(0.77,0,0.18,1)]
  ${loading ? `translate-y-0` : `-translate-y-full`}`}
    >
      <div
        className="w-80 h-80 
      flex justify-center items-center flex-col"
      >
        {keywords.map((k, index) => (
          <div className="h-14 w-80 relative overflow-hidden" key={k.name}>
            <h1
              className={`text-6xl inline-block h-4 w-20 transform transition-transform
              animate-pullup`}
              style={{
                transform: "translateY(56px)",
                aniamtionFillMode: "forwards",
                animationDelay: `${Math.abs(index - 2) * 0.5}s`,
              }}
            >
              {k.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

const keywords = [{ name: "portfolio" }, { name: "mao" }, { name: "ziyin" }];
