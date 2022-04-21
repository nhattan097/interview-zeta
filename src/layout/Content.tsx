import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};

export default Content;
