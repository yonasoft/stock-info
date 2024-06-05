import React from "react";
import useEarnings from "../hooks/useEarnings";

type Props = {
  ticker: string;
};

const EarningsChart = ({ ticker }: Props) => {
  const { earningsData, earningsLoading, earningsError } = useEarnings({
    ticker,
  });

  return (
    <>
      {(earningsLoading && <p>Loading...</p>) ||
        (earningsError && <p>Error: {earningsError}</p>) || (
          <div className="min-h-60 h-[50vh] bg-gray-900 shadow-lg rounded-xl m-4 overflow-x-auto"></div>
        )}
    </>
  );
};

export default EarningsChart;
