export interface Sentiment {
  score: number;
  value: string;
}

export interface Article {
  sentiment: Sentiment;
  summary: string;
}

export interface News {
  article1: Article;
  article2: Article;
  article3: Article;
}

export interface AnalystEstimates {
  [key: string]: number;
  Citibank: number;
  "Goldman Sachs": number;
  "Morgan Stanley": number;
}

export interface FinancialData {
  analyst_estimates: AnalystEstimates;
  current_ratio: number;
  debt_to_equity_ratio: number;
  eps: number;
  market_ap: number;
  news: News;
  pb_ratio: number;
  pe_ratio: number;
  peg_ratio: number;
  ps_ratio: number;
  shares_outstanding: number;
  ticker: string;
}
