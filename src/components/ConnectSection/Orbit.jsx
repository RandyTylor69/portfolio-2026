export default function Orbit() {
  return (
    <div
      className=" aspect-square w-[40%]
    flex justify-center items-center"
    >
      <div
        className="h-40 aspect-square relative"
        style={{
          transformStyle: "preserve-3d",
          perspective: "1500px",
        }}
      >
        {photos.map((p, i) => (
          <img
            key={i}
            className={`aspect-square h-full rounded-2xl border-2 border-secondary
            absolute left-[50%] top-[50%] animate-orbiting`}
            style={{"--index":i }}
            src={`/connect/${i}.svg`}
          />
        ))}
      </div>
    </div>
  );
}

const photos = [
  { color: "green" },
  { color: "red" },
  { color: "blue" },
  { color: "orange" },
  { color: "purple" },
];
