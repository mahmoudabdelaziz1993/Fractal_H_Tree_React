import React from "react";
import "./menu.css";
const Menu = ({
  lineLn,
  setLineLn,
  angleLF,
  setAngleLF,
  angleRT,
  setAngleRT,
  branchWD,
  setBranchWD
}) => {
  return (
    <div className="Menu">
      <div>
        <label>
          Line <span>{lineLn} px</span>
        </label>
        <input
          type="range"
          value={lineLn}
          min="1"
          max="200"
          onChange={(e) => setLineLn(e.target.value)}
        />
      </div>

      <div>
        <label>
          Angle Left <span>{angleLF}&deg;</span>
        </label>
        <input
          type="range"
          value={angleLF}
          onChange={(e) => setAngleLF(e.target.value)}
          min="0"
          max="90"
        />
      </div>
      <div>
        <label>
          Angle Right <span>{angleRT}&deg;</span>
        </label>
        <input
          type="range"
          value={angleRT}
          onChange={(e) => setAngleRT(e.target.value)}
          min="0"
          max="90"
        />
      </div>
      <div>
        <label>
          Angle Right <span>{branchWD}px</span>
        </label>
        <input
          type="range"
          value={branchWD}
          onChange={(e) => setBranchWD(e.target.value)}
          min="5"
          max="100"
        />
      </div>
    </div>
  );
};
export default Menu;
