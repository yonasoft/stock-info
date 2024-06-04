// src/types/stockData.ts
export interface OverviewData {
  MarketCapitalization: string;
  SharesOutstanding: string;
  PERatio: string;
  PriceToSalesRatioTTM: string;
  PriceToBookRatio: string;
  PEGRatio: string;
  CurrentRatio: string;
  DebtToEquityRatio: string;
  EPS: string;
}

export interface EarningsData {
  quarterlyEarnings: Array<{
    fiscalDateEnding: string;
    reportedEPS: string;
    estimatedEPS: string;
  }>;
}
