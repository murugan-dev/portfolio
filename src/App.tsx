import "./App.css";
import Home from "./pages/Home/index";
import About from "./pages/About/index";
import Skills from "./pages/Skills/index";
import Experience from "./pages/Experience/index";
import Projects from "./pages/Projects/index";

function App() {
  return (
    <div className="md:mx-[10%]">
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
