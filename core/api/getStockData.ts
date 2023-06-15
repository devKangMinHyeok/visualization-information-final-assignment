import { Stock } from "stock-data";

const getStockData = async () => {
  const response = await fetch("/api/data");
  const data: Stock[] = await response.json();
  return data;
};

export default getStockData;
