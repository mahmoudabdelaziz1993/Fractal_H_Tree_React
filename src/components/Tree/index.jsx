import React, { useEffect, useRef } from "react";
import "./tree.css";
const Tree = ({ lineLn, angleLF, angleRT, branchWD }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    const draw = (
      startX,
      startY,
      lineLength,
      angle,
      branchWidth,
      bodyColor
    ) => {
      // obtain the rendering context and its drawing functions

      // Creates a new path , future drawing commands are directed into the path and used to build the path up.
      ctx.beginPath();

      // Saves the entire state of the canvas.
      ctx.save();

      // style
      ctx.strokeStyle = bodyColor;
      ctx.fillStyle = bodyColor;
      ctx.lineWidth = branchWidth;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.translate(startX, startY);
      //  angleLF are in radians, not degrees. To convert, we are using: radians = (Math.PI/180)*degrees.
      ctx.rotate(angle * (Math.PI / 180));
      ctx.moveTo(0, 0);
      ctx.lineTo(0, -lineLength);
      ctx.stroke();

      // STOP
      if (lineLength < 5) {
        //Restores the most recently saved canvas state.
        ctx.restore();
        return;
      }

      //leaf's
      if (branchWidth < 5 && lineLength < 10) {
        draw(
          0,
          -lineLength,
          lineLength * 0.75,
          angleLF,
          branchWidth * 0.75,
          "#E60000"
        );
        draw(
          0,
          -lineLength,
          lineLength * 0.75,
          -angleRT,
          branchWidth * 0.75,
          "#E60000"
        );
      } else {
        // recurtion
        draw(0, -lineLength, lineLength * 0.75, angleLF, branchWidth * 0.75);
        draw(0, -lineLength, lineLength * 0.75, -angleRT, branchWidth * 0.75);
      }

      //Restores the most recently saved canvas state.
      ctx.restore();
    };

    draw(
      ctx.canvas.width / 2,
      ctx.canvas.height - 40,
      lineLn,
      0,
      branchWD,
      "#826F66"
    );
  }, [lineLn, angleRT, angleLF, branchWD]);

  return <canvas className="canvas" ref={canvasRef}></canvas>;
};

export default Tree;
