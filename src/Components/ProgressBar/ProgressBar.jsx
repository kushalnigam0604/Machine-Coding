import { Link } from "react-router-dom";
import "./ProgressBar.css";
import { useState } from "react";
import Bar from "./Bar";

const ProgressBar = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <Link to="/" className="problemTabs">
        🔙 Back to Home Page.
      </Link>
      <h2>Progress Bar</h2>
      <div className="progressBar">
        <button className="toggleBtn" onClick={() => setToggle(!toggle)}>
          {toggle ? "Close Bar" : "Open bar"}
        </button>

        {toggle ? <Bar/> : null}
      </div>
    </>
  );
};
export default ProgressBar;
