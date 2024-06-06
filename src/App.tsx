import React from "react";
import "./App.css";
import StockInformation from "./pages/StockInformation";
import Header from "./components/Header";
function App() {
  return (
    <div className="App flex flex-col h-screen bg-gray-800  text-white overflow-y-scroll overflow-x-clip">
      <header>
        <Header />
      </header>
      <main className="lg:container h-full mx-auto ">
        <StockInformation ticker={"AAPL"} />
      </main>
    </div>
  );
}

export default App;
