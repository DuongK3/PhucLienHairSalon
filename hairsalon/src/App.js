import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Open from "./pages/Open";
import Price from "./pages/Price";
import Service from "./pages/Service";
import Team from "./pages/Team";
import Testimonial from "./pages/Testimonial";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/about" element= {<About />} />
        <Route path="/contact" element= {<Contact />} />
        <Route path="/open" element= {<Open />} />
        <Route path="/price" element= {<Price />} />
        <Route path="/service" element= {<Service />} />
        <Route path="/team" element= {<Team />} />
        <Route path="/testimonial" element= {<Testimonial />} />
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
