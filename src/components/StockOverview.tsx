// src/components/StockOverview.tsx
import React, { useEffect, useState } from "react";
import { getOverview } from "../api/alphaVantage";
import { OverviewData } from "../types/stockData";

const StockOverview: React.FC<{ symbol: string }> = ({ symbol }) => {
  const [data, setData] = useState<OverviewData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const overviewData = await getOverview(symbol);
        setData(overviewData);
      } catch (err) {
        setError("Error fetching data. Using cached data if available.");
        const cachedData = localStorage.getItem(`overview_${symbol}`);
        if (cachedData) {
          setData(JSON.parse(cachedData));
        } else {
          setError("No cached data available.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [symbol]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="bg-gray-700 text-white h-full p-6">
      <h2>Stock Overview for {symbol}</h2>
      {data && (
        <ul>
          <li>Market Cap: {data.MarketCapitalization}</li>
          <li>Shares Outstanding: {data.SharesOutstanding}</li>
          <li>P/E Ratio: {data.PERatio}</li>
          <li>P/S Ratio: {data.PriceToSalesRatioTTM}</li>
          <li>P/B Ratio: {data.PriceToBookRatio}</li>
          <li>PEG Ratio: {data.PEGRatio}</li>
          <li>Current Ratio: {data.CurrentRatio}</li>
          <li>Debt to Equity Ratio: {data.DebtToEquityRatio}</li>
          <li>EPS: {data.EPS}</li>
        </ul>
      )}
    </div>
  );
};

export default StockOverview;
