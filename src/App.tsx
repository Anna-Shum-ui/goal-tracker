//App.tsx main component structure, responsible for setting up routing

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import CreateGoal from "./pages/CreateGoal";

function App() {
  return (
    <BrowserRouter>
      {/* Header stays on all pages */}
      <Header /> 

      {/* Links */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateGoal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;