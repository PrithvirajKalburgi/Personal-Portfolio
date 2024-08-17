import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar";
import Homepage from "./Pages/homepage";
import About from "./Pages/about";
import Academics from "./Pages/academics";
import Contact from "./Pages/contact";
import Projects from "./Pages/projects";

function App() {
  return (

    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      </div>

  );
}

export default App;
