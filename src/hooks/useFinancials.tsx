// src/hooks/useFinancials.ts
import { useEffect, useState } from "react";
import { FinancialData } from "../types/financialsData";
import { getFinancials } from "../api/financials";

const useFinancials = () => {
  const [financialData, setFinancialData] = useState<FinancialData | null>(
    null
  );
  const [financialLoading, setFinancialLoading] = useState<boolean>(true);
  const [financialError, setFinancialError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setFinancialLoading(true);
        const data = await getFinancials();
        setFinancialData(data);
      } catch (err) {
        setFinancialError("Error fetching financial data.");
      } finally {
        setFinancialLoading(false);
      }
    };

    fetchData();
  }, []);

  return { financialData, financialLoading, financialError };
};

export default useFinancials;
