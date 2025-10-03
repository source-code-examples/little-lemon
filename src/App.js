import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Home from "./pages/HomePage.jsx";
import Main from "./Main.jsx";
import ConfirmedBooking from "./pages/ConfirmedBooking.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservations" element={<Main />} />
          <Route path="/confirmation" element={<ConfirmedBooking />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
