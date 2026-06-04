import { useState } from "react";

const Tabs = () => {
  const tabsData = [
    { label: "Profile", content: <div>Profile Tab 001</div> },
    { label: "Setting", content: <div>Setting Tab 002</div> },
    { label: "Contact", content: <div>Contact Tab 003</div> },
  ];
  const [tabValue, setTabValue] = useState(tabsData[0].content);
  const handleTabData = (data) => {
    setTabValue(data);
  };
  return (
    <>
      <h2>Tab Section</h2>
      <div className="tabs">
        {tabsData.map((item, index) => {
          return (
            <div
              key={index}
              className="tabsLabel"
              onClick={() => handleTabData(item.content)}
            >
              {item.label}
            </div>
          );
        })}
      </div>
      <div className="tabsValue">{tabValue}</div>
    </>
  );
};
export default Tabs;
