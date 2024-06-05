import React from "react";
import "./App.css";
import StockOverview from "./components/StockOverview";
import Header from "./components/Header";

function App() {
  const [searchField, setSearchField] = React.useState<string>("");
  const [symbol, setSymbol] = React.useState<string>("AAPL");

  return (
    <div className="App flex flex-col h-screen bg-gray-700 text-white overflow-y-scroll overflow-x-clip">
      <Header
        searchField={searchField}
        setSearchField={setSearchField}
        onFocus={() => {
          setSearchField("");
        }}
        onSearch={() => {
          const upperCaseSymbol = searchField.toUpperCase();
          setSymbol(upperCaseSymbol);
          setSearchField("");
        }}
      />
      <div className="lg:container h-full mx-auto p-0">
        <StockOverview symbol={symbol} />
      </div>
    </div>
  );
}

export default App;
