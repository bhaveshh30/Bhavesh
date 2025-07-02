import React, { useEffect, useRef } from "react";

const DotCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveDot = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", moveDot);
    return () => window.removeEventListener("mousemove", moveDot);
  }, []);

  return (
    <div
      ref={dotRef}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "12px",
        height: "12px",
        background: "#333",
        borderRadius: "50%",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
        transition: "background 0.2s, transform 0.1s",
      }}
    />
  );
};

export default DotCursor; 