import { CSSProperties, FC, JSX } from "react";

type FrostRippleProps = {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
};

const RippleBg: FC<FrostRippleProps> = ({
  mainCircleSize = 320,
  mainCircleOpacity = 0.55,
  numCircles = 12,
}) => {
  const circles: JSX.Element[] = [];

  for (let i = 0; i < numCircles; i++) {
    const size = mainCircleSize + i * 50;
    const opacity = Math.max(mainCircleOpacity - i * 0.07, 0);
    const animationDelay = `${i * 0.15}s`;
    // const borderStyle = i % 2 === 0 ? "solid" : "dashed";

    const style: CSSProperties = {
      borderRadius: "50%",
      width: `${size}px`,
      height: `${size}px`,
      opacity,
      animationDelay,
      borderStyle: "dotted",
      borderWidth: "1.5px",
      borderColor: `rgba(var(--foreground-rgb),  ${0.3 + i * 0.05})`,
      backgroundColor: "rgba(173,216,230, 0.05)",
      boxShadow: `0 0 15px rgba(173,216,230, ${0.2 + i * 0.05})`,
    };

    circles.push(
      <div key={i} style={style} className="animate-ripple absolute" />
    );
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {circles}
    </div>
  );
};

export default RippleBg;
