import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Home from "./pages/HomePage.jsx";
import Main from "./Main.jsx";
import ConfirmedBooking from "./pages/ConfirmedBooking.jsx";
import AboutPage from "./pages/AboutPage";
import MenuPage from "./pages/MenuPage";
import OrderOnlinePage from "./pages/OrderOnlinePage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/reservations" element={<Main />} />
          <Route path="/confirmation" element={<ConfirmedBooking />} />

          <Route path="/order-online" element={<OrderOnlinePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
