import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.scss";
import QuesListing from "./component/QuesListing";

function App() {
  return (
    <div className="App">
      <QuesListing />
    </div>
  );
}

export default App;
