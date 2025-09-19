import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
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
