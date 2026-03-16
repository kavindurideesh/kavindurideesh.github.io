import { useState } from "react";
import "./app.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Research from "./pages/Research";
import Contact from "./pages/Contact";

export default function App() {
  const [activePage, setActivePage] = useState("Home");

  const renderPage = () => {
    switch (activePage) {
      case "Home":     return <Home setActivePage={setActivePage} />;
      case "Skills":   return <Skills />;
      case "Projects":   return <Projects />;
      // case "Research": return <Research />;
      case "Contact":    return <Contact />;
      default:         return <Home />;
    }
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      overflow: "hidden",
    }}>
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      <main style={{ flex: 1, overflow: "auto" }}>
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
}