// src/types/stockData.ts
export interface EarningsData {
  quarterlyEarnings: Array<{
    fiscalDateEnding: string;
    reportedEPS: string;
    estimatedEPS: string;
  }>;
}
