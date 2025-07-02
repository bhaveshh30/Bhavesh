import React, { useEffect, useRef, useState } from "react";

interface ParallaxLayerProps {
  speed?: number; // 0.1 = slow, 1 = normal, 2 = fast
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const ParallaxLayer: React.FC<ParallaxLayerProps> = ({
  speed = 0.5,
  className = "",
  style = {},
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      setOffset((rect.top + scrollY) * speed * -1);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        transform: `translateY(${offset}px)`,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxLayer; 