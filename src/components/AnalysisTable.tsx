import React from "react";
import { AnalystEstimates } from "../types/financialsData";

type Props = {
  data: AnalystEstimates;
};

// AnalysisTable component which displays the analyst estimates
const AnalysisTable = ({ data }: Props) => {
  return (
    <table className="w-full text-center table-auto bg-gray-900">
      <caption>
        <h2 className="my-4 font-bold text-lg">Analyst Estimates</h2>
      </caption>
      <thead>
        <tr>
          <th scope="col">Analyst</th>
          <th scope="col">Estimate</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          Object.keys(data).map((key) => (
            <tr key={key} className="border-b">
              <td className="px-4 py-2">{key}</td>
              <td className="px-4 py-2">{data[key]}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default AnalysisTable;
