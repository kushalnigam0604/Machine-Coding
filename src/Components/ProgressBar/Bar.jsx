import { useEffect, useState } from "react";

const Bar = () => {
  const [barLength, setBarLength] = useState(0);
  let intervalId;
  useEffect(() => {
    intervalId = setInterval(() => {
      setBarLength((prevLength) => {
        if (prevLength === 100) {
          clearInterval(intervalId);
          return 0;
        } else {
          return prevLength + 10;
        }
      });
    }, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);
  return (
    <div className="primaryBar">
      <div
        className="secondaryBar"
        style={{ transform: `translateX(${barLength - 100}%)` }}
      ></div>
    </div>
  );
};

export default Bar;
