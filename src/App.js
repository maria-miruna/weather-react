import Search from "./Search";
import Temperature from "./Temperature";
import Forecast from "./Forecast";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <div className="row">
          <div className="col-md-5 col-sm-12 text-center">
            <h1>Coimbra</h1>
            <p className="days">Thursday 12:15, 30 March</p>
          </div>
        </div>
        <Temperature />
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}
