import { FinancialData } from "../types/financialsData";
import financialsData from "../data/financials.json";

export const getFinancials = async (): Promise<FinancialData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(financialsData as FinancialData);
    }, 1000);
  });
};
