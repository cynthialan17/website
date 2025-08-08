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
              <a
                href="https://docs.google.com/document/d/1SY48r7z-953V_Urgi55IXVqBuIgeTo7wWq1r7cEarvU/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View Resume
              </a>
              <a
                href="https://linkedin.com/in/cynthia-lan-0b845a203"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="./images/headshot.png"
              alt="Cynthia's headshot"
              className="headshot"
            />
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
