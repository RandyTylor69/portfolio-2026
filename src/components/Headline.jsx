import Matter from "matter-js";
import canvas from "matter-js";
import { useEffect, useState, useRef } from "react";

export default function Headline({ name }) {
  const matterRef = useRef();
  const [hovered, setHovered] = useState(false);
  const engineRef = useRef();
  const renderRef = useRef();
  const runnerRef = useRef();
  const boxesRef = useRef([]); // holds all dropping texts

  const [dictionary, setDictionary] = useState([
    ["TypeScript", "React", "Django", "Python", "JavaScript", "Vite"],
    ["MongoDB", "AWS-S3", "MySQL", "Java", "TypeScript", "React", "Tailwind"],
    ["Music", "Cooking", "Cinema", "Chess", "YouTuber", "Gaming", "Sports"],
  ]);

  useEffect(() => {
    // decide which dictionary array to use
    var dictType;
    if (name == "Works") {
      dictType = 0;
    }
    if (name == "Projects") {
      dictType = 1;
    }
    if (name == "Connect") {
      dictType = 2;
    }

    // module aliases
    var Engine = Matter.Engine,
      Render = Matter.Render,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite;

    // create an engine
    var engine = Engine.create();
    engineRef.current = engine;

    // create a renderer
    var render = Render.create({
      element: matterRef.current,
      engine: engine,
      options: {
        width: 300,
        height: 200,
        wireframes: false,
        background: "transparent",
      },
    });
    renderRef.current = render;

    // create the text boxes

    boxesRef.current = dictionary[dictType].map((text) =>
      Bodies.rectangle(150, -80, 100, 30, {
        render: {
          sprite: {
            texture: `./textBoxes/${text}.svg`,
            xScale: 1,
            yScale: 1,
          },
        },
      })
    );

    var ground = Bodies.rectangle(200, 200, 400, 1, { isStatic: true });

    // add all of the bodies to the world
    Composite.add(engine.world, [...boxesRef.current, ground]);

    // create runner
    var runner = Matter.Runner.create();
    runnerRef.current = runner;
  }, []);

  useEffect(() => {
    if (hovered) {
      // run the renderer
      Matter.Render.run(renderRef.current);

      // run the runner (animation)
      Matter.Runner.run(runnerRef.current, engineRef.current);
    } else {
      // stop the animation
      Matter.Runner.stop(runnerRef.current);

      // move the texts to where they were before
      boxesRef.current.forEach((box) => {
        Matter.Body.setPosition(box, { x: 150, y: -80 });
        Matter.Body.setVelocity(box, { x: 0, y: 0 });
        Matter.Body.setAngle(box, 0);
        Matter.Body.setAngularVelocity(box, 0);
      });
    }
  }, [hovered]);

  return (
    <div className="w-full h-96 flex justify-center items-center  relative">
      <div
        className={`absolute w-full h-full flex justify-center items-end z-81 
            pointer-events-none
        `}
        ref={matterRef}
      />
      <h1
        className="text-6xl md:text-8xl lg:text-9xl  -mb-1 md:-mb-3
      absolute bottom-0 left-1/2 transform -translate-x-1/2 z-80
      transition-transform duration-300 hover:-translate-y-10 ease-in-out"
        onPointerEnter={(e) => {
          e.stopPropagation(), setHovered(true);
        }}
        onPointerLeave={(e) => {
          e.stopPropagation(), setHovered(false);
        }}
      >
        {name}
      </h1>
    </div>
  );
}
