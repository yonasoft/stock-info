// src/components/StockOverview.tsx
import React from "react";
import useAlphaVantage from "../hooks/useAlphaVantage";
import InfoCard from "./InfoCard";

const StockOverview: React.FC<{ symbol: string }> = ({ symbol }) => {
  const { data, loading, error } = useAlphaVantage({ symbol });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const ratios = [
    { title: "Market Capitalization", value: data?.MarketCapitalization },
    { title: "Shares Outstanding", value: data?.SharesOutstanding },
    { title: "Earnings-per-share(EPS)", value: data?.EPS },
    { title: "Price-to-Earnings(P/E)", value: data?.PERatio },
    { title: "Price-to-Sales(P/S)", value: data?.PriceToSalesRatioTTM },
    { title: "Price-to-Book(P/B)", value: data?.PriceToBookRatio },
    { title: "Debt To Equity Ratio", value: data?.DebtToEquityRatio },
  ];

  return (
    <div className="h-full p-6 flex flex-col align-middle">
      <h2 className="text-blue-400 text-2xl">Stock Overview for: </h2>
      <h1 className="text-4xl font-bold">{symbol}</h1>
      <div></div>
      <div className="flex flex-row flex-wrap">
        {data &&
          ratios.map((ratio, index) => (
            <InfoCard
              key={index}
              title={ratio.title}
              value={ratio.value || ""}
            />
          ))}
      </div>
    </div>
  );
};

export default StockOverview;
