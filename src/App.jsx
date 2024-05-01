import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import ParticlesComponent from "./components/ParticlesComponent";
import { useSelector } from "react-redux";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-source-sans">
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
