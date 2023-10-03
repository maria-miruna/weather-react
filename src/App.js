import Search from "./Search";
// import Temperature from "./Temperature";
import Forecast from "./Forecast";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        
        {/* <Temperature result={result} /> */}
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}
