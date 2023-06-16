import { atom } from "jotai";
import { Stock, TimeValue } from "stock-data";
import { dateRangeAtom } from "./interactionDataAtom";
import { calculateStockProfitRate } from "@/util/calculateStockProfitRate";

export const stockDataAtom = atom<Stock[]>([]);

export const filteredStockDataAtom = atom((get) => {
  const stockData = get(stockDataAtom);
  const dateRange = get(dateRangeAtom);
  const { start, end } = dateRange;

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

export const transformedStockDataAtom = atom<TimeValue[]>((get) => {
  const stocks = get(filteredStockDataAtom);

  return stocks.map((stock) => {
    const { date, close } = stock;

    return {
      time: date,
      value: close,
    };
  });
});

export const profitRateAtom = atom<TimeValue[]>((get) => {
  const stocks = get(filteredStockDataAtom);
  const profitRate = stocks
    .map(calculateStockProfitRate)
    .filter(Boolean) as TimeValue[];
  return profitRate;
});

export const profitRateDesSortAtom = atom<TimeValue[]>((get) => {
  const stocks = get(filteredStockDataAtom);
  const profitRate = stocks
    .map(calculateStockProfitRate)
    .filter(Boolean) as TimeValue[];

  return [...profitRate].sort((a, b) => b.value - a.value);
});

export const profitRateAscSortAtom = atom<TimeValue[]>((get) => {
  const stocks = get(filteredStockDataAtom);
  const profitRate = stocks
    .map(calculateStockProfitRate)
    .filter(Boolean) as TimeValue[];

  return [...profitRate].sort((a, b) => a.value - b.value);
});
