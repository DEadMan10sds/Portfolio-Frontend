import { useState, useEffect, useRef } from "react";
import "./CylinderCards.css"; // You can add custom CSS if needed

const CylinderCards = ({ items = new Array(12).fill(1) }) => {
  const [rotationY, setRotationY] = useState(0); // To track the current rotation angle
  const stageRef = useRef(null); // Reference to the stage container

  const angle = 360 / items.length; // Divide the circle into 13 parts

  const rotate = (direction) => {
    setRotationY((prevRotation) => prevRotation + direction * angle);
  };

  // Effect to apply the 3D perspective when component is mounted
  useEffect(() => {
    const stage = stageRef.current;
    stage.style.perspective = "1500px";
    stage.style.transformStyle = "preserve-3d";

    // setInterval(() => {
    //   rotate(-1);
    // }, 3000);
  }, [rotate]);

  const boxStyle = (index) => {
    const boxRotation = rotationY + index * angle;
    return {
      transform: `rotateY(${boxRotation}deg) translateZ(420px)`,
      transition: "transform 1s ease-in-out", // Smooth transition on rotation
    };
  };

  return (
    <div className="flex gap-3 p-12 h-96">
      <button
        onClick={() => rotate(1)}
        className="hover:bg-gradient-to-r hover:from-transparent hover:to-blue-500 text-white px-4 py-2 "
      >
        {"<"}
      </button>
      <div className="relative w-[90%] ">
        <div
          ref={stageRef}
          className=" relative flex items-center justify-center w-full h-full"
        >
          {items.map((_, index) => (
            <div
              key={index}
              className="box absolute h-fit w-44"
              style={boxStyle(index)}
            >
              <div>
                <div className="flex flex-col gap-3 h-fit bg-black rounded-lg p-2">
                  <div className="flex flex-col gap-2">
                    <img src={"/"} />
                    <h1 className="font-bold text-white text-sm">Titulo</h1>
                  </div>
                  <div>
                    <p className="mb-3">Descripcion</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => rotate(-1)}
        className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-transparent text-white px-4 py-2"
      >
        {">"}
      </button>
    </div>
  );
};

export default CylinderCards;
