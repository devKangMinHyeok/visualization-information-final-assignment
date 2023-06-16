import { atom } from "jotai";
import { Stock } from "stock-data";
import { dateRangeAtom } from "./interactionDataAtom";

export const stockDataAtom = atom<Stock[]>([]);

export const filteredStockDataAtom = atom((get) => {
  const stockData = get(stockDataAtom);
  const dateRange = get(dateRangeAtom);
  const { start, end } = dateRange;
  console.log("stockData", stockData);
  console.log("dateRange", dateRange);
  return stockData.filter(
    (data) => new Date(data.date) >= start && new Date(data.date) <= end
  );
});

export const filteredDatesAtom = atom<Date[]>((get) => {
  const filteredStockData = get(stockDataAtom);

  const dates = filteredStockData.map((stock) => new Date(stock.date));
  return dates;
});

export const stockDataObjectAtom = atom((get) => {
  const stocks = get(stockDataAtom);

  const stocksObject: { [key: string]: Stock } = {};

  stocks.forEach((stock) => {
    stocksObject[stock.date.toString()] = stock;
  });

  return stocksObject;
});

export const transformedStockDataAtom = atom((get) => {
  const stocks = get(filteredStockDataAtom);

  return stocks.map((stock) => {
    const { date, close } = stock;

    return {
      time: date,
      value: close,
    };
  });
});

export const profitRateAtom = atom((get) => {
  const stocks = get(filteredStockDataAtom);

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
