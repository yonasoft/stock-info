import EarningsChart from "../components/EarningsChart";
import FinancialInformation from "../components/FinancialInformation";

const StockInformation: React.FC<{ ticker: string }> = ({ ticker }) => {
  return (
    <div className="h-full w-full flex flex-col align-middle pt-3 mb-4">
      <h2 className="text-blue-400 text-2xl">Stock Overview for:</h2>
      <h1 className="text-4xl font-bold">{ticker}</h1>

      <EarningsChart ticker={ticker} />
      <FinancialInformation />
    </div>
  );
};

export default StockInformation;
