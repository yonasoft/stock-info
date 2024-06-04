import React from "react";
import "./App.css";
import StockOverview from "./components/StockOverview";

function App() {

  return (
    <div className="App">
      <header className="App-header"></header>
      <StockOverview symbol="AAPL" />
    </div>
  );
}

export default App;
