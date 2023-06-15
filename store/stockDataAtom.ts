import { atom } from "jotai";
import { Stock } from "stock-data";

export const stockDataAtom = atom<Stock[]>([]);

export const stockDataObjectAtom = atom((get) => {
  const stocks = get(stockDataAtom);

  const stocksObject: { [key: string]: Stock } = {};

  stocks.forEach((stock) => {
    stocksObject[stock.date.toString()] = stock;
  });

  return stocksObject;
});

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
  const stocks = get(stockDataAtom);

  return stocks
    .map((stock, idx) => {
      if (idx === 0) {
        return null;
      }

      const prevClose = stocks[idx - 1].close;
      const currClose = stock.close;
      const profitRate = (currClose - prevClose) / prevClose;

      return {
        time: stock.date,
        value: profitRate,
      };
    })
    .filter(Boolean);
});
