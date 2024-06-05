import React from "react";
import { AnalystEstimates } from "../types/financialsData";

type Props = {
  data: AnalystEstimates;
};

const AnalysisTable = ({ data }: Props) => {
  return (
    <table className="w-full text-center table-auto">
      <thead>
        <tr>
          <th>Analyst</th>
          <th>Estimate</th>
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
