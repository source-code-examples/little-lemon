import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Reservation from "./pages/Reservation.jsx";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reservations" element={<Reservation />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
