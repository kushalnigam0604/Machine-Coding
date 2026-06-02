import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./InfiniteScroll.css";

const InfiniteScroll = () => {
  const [photoData, setPhotoData] = useState([]);
  const [page, setPage] = useState(1);
  const fetchPhotoData = async () => {
    const data = await fetch(
      `https://picsum.photos/v2/list?page=${page}&limit=5`,
    );
    const res = await data.json();
    setPhotoData((prevData) => [...prevData, ...res]);
  };
  useEffect(() => {
    fetchPhotoData();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prevValue) => prevValue + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Link to="/" className="problemTabs">
        🔙 Back to Home Page.
      </Link>

      <div className="infiniteScrollBody">
        <h3>Infinite Scroll</h3>
        {photoData?.map((item, index) => {
          return (
            <div className="infiniteScrollData" key={index}>
              <img src={item.download_url} alt="" />
              <p>{item?.author}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InfiniteScroll;
