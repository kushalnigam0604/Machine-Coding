import React from "react";
import { Link } from "react-router-dom";
import "./TabAndModal.css";
import Tabs from "./Tabs";
import Modals from "./Modals";

const TabAndModal = () => {
  return (
    <div className="tabAndModal">
      <Link to="/" className="problemTabs">
        🔙 Back to Home Page
      </Link>
      <div className="tabAndModalBody">
        <Tabs />
      </div>
      <div className="tabAndModalBody">
        <Modals/>
      </div>
    </div>
  );
};

export default TabAndModal;
