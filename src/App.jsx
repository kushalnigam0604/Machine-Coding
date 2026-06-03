import { Routes, Route } from "react-router-dom";
import TabAndModal from "./Components/TabAndModal/TabAndModal";
import HomePage from "./Components/HomePage/HomePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tab" element={<TabAndModal />} />
    </Routes>
  );
};

export default App;
