import { Routes, Route } from "react-router-dom";
import TabAndModal from "./Components/TabAndModal/TabAndModal";
import HomePage from "./Components/HomePage/HomePage";
import InfiniteScroll from "./Components/InfiniteScroll/InfiniteScroll";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tabandmodal" element={<TabAndModal />} />
      <Route path="/infinitescroll" element={<InfiniteScroll />} />
    </Routes>
  );
};

export default App;
