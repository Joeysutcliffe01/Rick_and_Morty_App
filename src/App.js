import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/home/Home";
import { AllCharacters } from "./Pages/allCharacters/AllCharacters";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allCharacters" element={<AllCharacters />} />
      </Routes>
    </div>
  );
}

export default App;
