import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Navbar } from "./components/Navbar/Navbar";
import "./components/Navbar/navbar.css";

import Homescreen from "./screens/Homescreen";

function App() {
  return (
    <div className="App">

    <Navbar/>

    <BrowserRouter>
      <Routes>

       <Route path="/" exact element={<Homescreen />} />

      </Routes>
    </BrowserRouter>


    </div>
  );
}

export default App;
