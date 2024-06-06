import React, { useMemo, useState } from "react";
import ReactApexChart from "react-apexcharts";
import usePrices from "../hooks/usePrices";
import { candleStickOptions } from "../constants/candleStickOptions";
import IntervalsButton from "./IntervalsButton";

type Interval =
  | "1min"
  | "5min"
  | "15min"
  | "30min"
  | "1h"
  | "1day"
  | "1week"
  | "1month";

type Props = {
  ticker: string;
};

// Component to display a chart of the stock prices
const PricesChart = ({ ticker }: Props) => {
  const intervals = [
    { label: "1 Minute", value: "1min" },
    { label: "5 Minutes", value: "5min" },
    { label: "15 Minutes", value: "15min" },
    { label: "30 Minutes", value: "30min" },
    { label: "1 Hour", value: "1h" },
    { label: "Daily", value: "1day" },
    { label: "Weekly", value: "1week" },
    { label: "Monthly", value: "1month" },
  ];

  const [interval, setInterval] = useState<Interval>("1day");
  const { pricesData, pricesLoading, pricesError } = usePrices({
    ticker,
    interval,
  });

  const seriesData = useMemo(() => {
    if (!pricesData) return [];

    const { values } = pricesData;

    return values
      ? values.map((data: any) => ({
          x: new Date(data.datetime),
          y: [data.open, data.high, data.low, data.close].map(parseFloat),
        }))
      : [];
  }, [pricesData]);

  return (
    <>
      {(pricesLoading && <p>Loading...</p>) ||
        (pricesError && <p>Error: {pricesError}</p>) || (
          <div className="min-h-60 h-[50vh] bg-gray-900 shadow-lg rounded-xl m-4 text-white p-4 overflow-auto">
            <div className="w-full my-4 flex flex-wrap gap-2 align-middle justify-center">
              {intervals.map(({ label, value }) => (
                <IntervalsButton
                  key={value}
                  label={label}
                  onClick={() => setInterval(value as Interval)}
                />
              ))}
            </div>
            <div className="h-full w-full">
              <ReactApexChart
                options={candleStickOptions}
                series={[{ data: seriesData }]}
                type="candlestick"
                height="80%"
              />
            </div>
          </div>
        )}
    </>
  );
};

export default PricesChart;
