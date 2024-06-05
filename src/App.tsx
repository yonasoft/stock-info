import React from "react";
import "./App.css";
import StockOverview from "./components/StockOverview";
import Header from "./components/Header";

function App() {
  const [searchField, setSearchField] = React.useState<string>("");
  const [symbol, setSymbol] = React.useState<string>("AAPL");

  return (
    <div className="App flex flex-col h-screen bg-gray-700 text-white">
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
      <StockOverview symbol={symbol} />
    </div>
  );
}

export default App;
