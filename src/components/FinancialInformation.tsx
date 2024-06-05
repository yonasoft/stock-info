import React from "react";
import useFinancials from "../hooks/useFinancials";
import { AnalystEstimates } from "../types/financialsData";
import AnalysisTable from "./AnalysisTable";
import InfoCard from "./InfoCard";

type Props = {};

const FinancialInformation = (props: Props) => {
  const { financialData, financialLoading, financialError } = useFinancials();

	  const ratios = [
      {
        title: "Market Capitalization",
        value: financialData?.market_ap.toString() || "",
      },
      {
        title: "Shares Outstanding",
        value: financialData?.shares_outstanding.toString() || "",
      },
      {
        title: "Earnings-per-share(EPS)",
        value: financialData?.eps.toString() || "",
      },
      {
        title: "Price-to-Earnings(P/E)",
        value: financialData?.pe_ratio.toString() || "",
      },
      {
        title: "Price-to-Sales(P/S)",
        value: financialData?.ps_ratio.toString() || "",
      },
      {
        title: "Price-to-Book(P/B)",
        value: financialData?.pb_ratio.toString() || "",
      },
      {
        title: "Debt To Equity Ratio",
        value: financialData?.debt_to_equity_ratio.toString() || "",
      },
    ];
	
  return (
    <>
      {(financialLoading && <p>Loading...</p>) ||
        (financialError && <p>Error: {financialError}</p>) || (
          <div className="w-full mt-2 grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-6 flex flex-row flex-wrap gap-2 justify-center mx-4">
              {ratios.map((ratio, index) => (
                <InfoCard key={index} title={ratio.title} value={ratio.value} />
              ))}
            </div>
            <div className="col-span-12 lg:col-span-6 bg-gray-900 rounded-xl p-2 mx-4 mb-5 shadow-lg">
              <AnalysisTable
                data={financialData?.analyst_estimates as AnalystEstimates}
              />
            </div>
          </div>
        )}
    </>
  );
};

export default FinancialInformation;
