import * as React from "react";

function getColor(value: number): string {
  if (value < 0) {
    return "black";
  }
  if (value >= 400) {
    return "red";
  }
  if (value >= 300) {
    return "yollow";
  }
  return "green";
}

interface BarProps {
  data: number[];
}

export default function Bar({ data }: BarProps): React.ReactElement {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!context) {
      return;
    }

    for (let index = 0; index < data.length; index++) {
      context.fillStyle = getColor(data[index]);
      context.fillRect(index + 0.5, 0, 1.5, context.canvas.height);
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [data.length]);

  return (
    <canvas
      height={5}
      ref={canvasRef}
      style={{ border: "1px solid gray", width: "100%" }}
    />
  );
}
