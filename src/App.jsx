import { Routes, Route } from "react-router-dom";
import "./App.css";
import TabAndModal from "./Components/TabAndModal/TabAndModal";
import HomePage from "./Components/HomePage/HomePage";
import InfiniteScroll from "./Components/InfiniteScroll/InfiniteScroll";
import Todo from "./Components/TodoApp/Todo";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tabandmodal" element={<TabAndModal />} />
      <Route path="/infinitescroll" element={<InfiniteScroll />} />
      <Route path="/todo" element={<Todo/>} />
    </Routes>
  );
};

export default App;
