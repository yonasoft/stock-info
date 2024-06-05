import { FinancialData } from "../types/financialsData";
import financialsData from "../data/financials.json";

//Due to CORS issues, we are using a local JSON file instead of fetching data from the API
export const getFinancials = async (): Promise<FinancialData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(financialsData as FinancialData);
    }, 1000);
  });
};
