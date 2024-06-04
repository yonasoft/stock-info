// src/api/alphaVantage.ts
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
  try {
    const response = await apiClient.get("", {
      params: {
        function: "OVERVIEW",
        symbol: symbol,
      },
    });
    console.log(response.data);

    // Save data to localStorage
    localStorage.setItem(`overview_${symbol}`, JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.error("Error fetching data", error);

    // Retrieve data from localStorage in case of error
    const cachedData = localStorage.getItem(`overview_${symbol}`);
    if (cachedData) {
      return JSON.parse(cachedData);
    } else {
      throw new Error("No cached data available");
    }
  }
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
