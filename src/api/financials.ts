import { FinancialData } from "../types/financialsData";
import financialsData from "../data/financials.json";

//Due to CORS issues, we are using a local JSON file instead of fetching data from the API in the Docker container
export const getFinancials = async (): Promise<FinancialData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(financialsData as FinancialData);
    }, 1000);
  });
};


//This is the code that would be used to fetch data from the API

// const baseURL = "http://127.0.0.1:8000";
// const apiClient = axios.create({
//   baseURL,
// });

// export const getFinancials = async () => {
//   try {
//     const response = await apiClient.get("/fianancials", {
//       params: {},
//     });
//     console.log(response.data);

//     return response.data;
//   } catch (error) {
//     console.error("Error fetching data", error);
//     throw new Error("No cached data available");
//   }
// };