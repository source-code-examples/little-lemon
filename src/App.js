import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.js";
// import Main from "./components/Main";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;

/**
 * 3. css reset in index.css
 * pushen!!!
 * 4. grid layout & responsive layout for the core structure: header. main, footer - App.css - before add selectors in html
 * 5. Header.css: grid and responsive -  before add selectors in html
 * 6. Main.css: ...
 * 7. Footer.css: ...
 * 8. push!!!
 */
