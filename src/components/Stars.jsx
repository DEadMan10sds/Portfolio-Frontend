import { useEffect, useRef } from "react";

const NUM_STARS = 150;

export function Stars() {
  const divRef = useRef(null);

  useEffect(() => {
    const stars = divRef.current;
    if (!stars) return;

    stars.querySelectorAll("div").forEach((star) => {
      const size = Math.random() > 0.5 ? 1 : 2;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.opacity = `${Math.random()}`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
    });
  }, [divRef]);

  return (
    <div
      ref={divRef}
      className="fixed -z-10 pointer-events-none inset-0 size-full m-auto"
    >
      {Array.from({ length: NUM_STARS }, (_, i) => (
        <div className="absolute bg-white rounded-full" key={i} />
      ))}
    </div>
  );
}
