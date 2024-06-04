import axios from "axios";

const apiKey = process.env.REACT_APP_ALPHA_VANTAGE_API_KEY;
const baseURL = "https://www.alphavantage.co/query";

const apiClient = axios.create({
  baseURL,
  params: {
    apikey: apiKey, // Use lowercase 'apikey'
  },
});

export const getOverview = async (symbol: string) => {
  const response = await apiClient.get("", {
    params: {
      function: "OVERVIEW",
      symbol: symbol,
    },
  });
  console.log(response.data);
  return response.data;
};

export const getEarnings = async (symbol: string) => {
  const response = await apiClient.get("", {
    params: {
      function: "EARNINGS",
      symbol,
    },
  });
  return response.data;
};
