// src/components/StockOverview.tsx
import React from "react";
import InfoCard from "./InfoCard";
import useFinancials from "../hooks/useFinancials";
import AnalysisTable from "./AnalysisTable";
import { AnalystEstimates } from "../types/financialsData";

const StockOverview: React.FC<{ symbol: string }> = ({ symbol }) => {
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
    <div className="h-full w-full flex flex-col align-middle pt-3">
      <h2 className="text-blue-400 text-2xl">Stock Overview for:</h2>
      <h1 className="text-4xl font-bold">{symbol}</h1>
      <div className="min-h-52 h-[50vh]  bg-gray-900 rounded-xl m-4 overflow-x-auto">
        vbvcb
      </div>
      <div className="w-full mt-2 grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-6 flex flex-row flex-wrap gap-2 justify-center">
          {(financialLoading && <p>Loading...</p>) ||
            (financialError && <p>Error: {financialError}</p>) ||
            ratios.map((ratio, index) => (
              <InfoCard key={index} title={ratio.title} value={ratio.value} />
            ))}
        </div>
        <div className="col-span-12 lg:col-span-6 bg-gray-900 rounded-xl p-2">
          <AnalysisTable
            data={financialData?.analyst_estimates as AnalystEstimates}
          />
        </div>
      </div>
    </div>
  );
};

export default StockOverview;
