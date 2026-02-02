import Typewriter from "typewriter-effect";

export default function TypeWriter({ hovered }) {
  if (!hovered) return;
  return (
    <>
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString(hovered.year).start(); // It types this and stops forever.
        }}
        options={{
          autoStart: true,
          delay: 5,
          cursor: "",
        }}
      />
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString(hovered.role).start(); // It types this and stops forever.
        }}
        options={{
          autoStart: true,
          delay: 5,
          cursor: "",
        }}
      />
    </>
  );
}
