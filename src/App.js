import { useState } from "react";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Tree from "./components/Tree";
import "./styles.css";

export default function App() {
  const [lineLn, setLineLn] = useState(100);
  const [angleLF, setAngleLF] = useState(45);
  const [angleRT, setAngleRT] = useState(15);
  const [branchWD, setBranchWD] = useState(20);

  return (
    <>
      <Hero />
      <Menu
        lineLn={lineLn}
        setLineLn={setLineLn}
        angleLF={angleLF}
        setAngleLF={setAngleLF}
        angleRT={angleRT}
        setAngleRT={setAngleRT}
        branchWD={branchWD}
        setBranchWD={setBranchWD}
      />
      <Tree
        branchWD={branchWD}
        lineLn={lineLn}
        angleLF={angleLF}
        angleRT={angleRT}
      />
    </>
  );
}
