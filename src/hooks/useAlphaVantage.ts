import { useEffect, useState } from "react";
import { OverviewData } from "../types/stockData";
import { getOverview } from "../api/alphaVantage";

type Props = { symbol: string };

const useAlphaVantage = ({ symbol }: Props) => {
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

  return { data, loading, error };
};

export default useAlphaVantage;