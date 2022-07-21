import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import SelectedCountry from "./components/SelectedCountry";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="country/:name" element={<SelectedCountry/>}/>
      </Routes>
    </div>
  );
}

export default App;
