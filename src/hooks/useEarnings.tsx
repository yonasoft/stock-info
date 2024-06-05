// src/hooks/useAlphaVantage.ts
import { useEffect, useState } from "react";
import { EarningsData } from "../types/stockData";
import { getEarnings } from "../api/earnings";

type Props = { symbol: string };

const useAlphaVantage = ({ symbol }: Props) => {
  const [earningsData, setEarningsData] = useState<EarningsData | null>(null);
  const [earningsLoading, setEarningsLoading] = useState<boolean>(true);
  const [earningsError, setEarningsError] = useState<string | null>(null);

  useEffect(() => {}, [symbol]);

  return { earningsData, earningsLoading, earningsError };
};

export default useAlphaVantage;
