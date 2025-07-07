import "./App.css";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />

      <header className="hero-section" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I'm Cynthia</h1>
            <p>Student at Cornell University</p>
            <div className="hero-buttons">
              <a href="#" download className="btn-primary">
                Download Resume
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="headshot-placeholder">Your Photo Here</div>
          </div>
        </div>
      </header>

      <div id="about">
        <About />
      </div>

      <div id="work">
        <Projects />
      </div>

      <Footer />
    </div>
  );
}

export default App;
