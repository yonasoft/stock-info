// src/components/StockOverview.tsx
import React from "react";
import useAlphaVantage from "../hooks/useEarnings";
import InfoCard from "./InfoCard";
import useFinancials from "../hooks/useFinancials";

const StockOverview: React.FC<{ symbol: string }> = ({ symbol }) => {
  const { earningsData, earningsLoading, earningsError } = useAlphaVantage({
    symbol,
  });
  const { financialData, financialLoading, financialError } = useFinancials();

  const ratios = [
    {
      title: "Market Capitalization",
      value: financialData?.market_ap.toString() || "",
    },
    {
      title: "Shares Outstanding",
      value: financialData?.shares_outstanding.toString() || "",
    },
    {
      title: "Earnings-per-share(EPS)",
      value: financialData?.eps.toString() || "",
    },
    {
      title: "Price-to-Earnings(P/E)",
      value: financialData?.pe_ratio.toString() || "",
    },
    {
      title: "Price-to-Sales(P/S)",
      value: financialData?.ps_ratio.toString() || "",
    },
    {
      title: "Price-to-Book(P/B)",
      value: financialData?.pb_ratio.toString() || "",
    },
    {
      title: "Debt To Equity Ratio",
      value: financialData?.debt_to_equity_ratio.toString() || "",
    },
  ];


  return (
    <div className="h-full p-4 flex flex-col align-middle">
      <h2 className="text-blue-400 text-2xl">Stock Overview for:</h2>
      <h1 className="text-4xl font-bold">{symbol}</h1>
      <div></div>
      <div className="flex flex-wrap justify-center w-full m-4">
        {ratios.map((ratio, index) => (
          <InfoCard key={index} title={ratio.title} value={ratio.value} />
        ))}
      </div>
    </div>
  );
};

export default StockOverview;
