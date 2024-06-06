import React from "react";
import "./App.css";
import StockInformation from "./pages/StockInformation";
import Header from "./components/Header";
function App() {
  return (
    <div className="App flex flex-col h-screen bg-gray-800  text-white overflow-y-scroll overflow-x-clip">
      <Header />
      <div className="lg:container h-full mx-auto ">
        <StockInformation ticker={"AAPL"} />
      </div>
    </div>
  );
}

export default App;
