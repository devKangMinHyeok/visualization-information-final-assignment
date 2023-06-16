import { Stock } from "stock-data";

export const calculateProfitRate = (prevClose: number, currClose: number) => {
  return (currClose - prevClose) / prevClose;
};

export const calculateStockProfitRate = (
  stock: Stock,
  idx: number,
  stocks: Stock[]
) => {
  if (idx === 0) {
    return null;
  }

  const prevClose = stocks[idx - 1].close;
  const currClose = stock.close;
  const profitRate = calculateProfitRate(prevClose, currClose);

  return {
    time: stock.date,
    value: profitRate,
  };
};
