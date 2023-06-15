import { atom } from "jotai";
import { Stock } from "stock-data";

export const stockDataAtom = atom<Stock[]>([]);

export const transformedStockDataAtom = atom((get) => {
  const stocks = get(stockDataAtom);

  return stocks.map((stock) => {
    const { date, close } = stock;

    return {
      time: date,
      value: close,
    };
  });
});

export const profitRateAtom = atom((get) => {
  const transformedStocks = get(transformedStockDataAtom);

  return transformedStocks
    .map((stock, idx) => {
      if (idx === 0) {
        return null;
      }

      const prevClose = transformedStocks[idx - 1].value;
      const currClose = stock.value;

      const profitRate = (currClose - prevClose) / prevClose;

      return {
        time: stock.time,
        value: profitRate,
      };
    })
    .filter(Boolean);
});
