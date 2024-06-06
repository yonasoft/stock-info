import axios from "axios";

// This file is used to fetch stock price data from the Twelve Data API
const apiKey = "e7c871634f874ee5b8c7a238557bed81"; 
const baseURL = "https://api.twelvedata.com";

const apiClient = axios.create({
  baseURL,
});

export const getPrices = async (symbol: string, interval: string) => {
  try {
    const response = await apiClient.get("/time_series", {
      params: {
        apikey: apiKey,
        symbol: symbol,
        interval: interval,
      },
    });
    console.log(response.data);

    // Save data to localStorage for caching purposes
    localStorage.setItem(
      `time_series_${symbol}_${interval}`,
      JSON.stringify(response.data)
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data", error);

    // Retrieve data from localStorage in case of error
    const cachedData = localStorage.getItem(
      `time_series_${symbol}_${interval}`
    );
    if (cachedData) {
      return JSON.parse(cachedData);
    } else {
      throw new Error("No cached data available");
    }
  }
};
