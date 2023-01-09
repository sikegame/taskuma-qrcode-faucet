import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import QrCodeContainer from "./components/QrCodeContainer";
import LogoImage from "./components/LogoImage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="mb-5">
          <LogoImage />
        </div>
        <QrCodeContainer />
      </header>
    </div>
  );
}

export default App;
