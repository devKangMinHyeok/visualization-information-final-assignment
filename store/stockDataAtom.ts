import { atom } from "jotai";
import { Stock } from "stock-data";

const urlAtom = atom(
  //   process.env.NODE_ENV !== "production"
  //     ? "https://visualization-information-final-assignment-7b0wyf5nt.vercel.app/api/data"
  //     : "http://localhost:3000/api/data"
  "http://localhost:3000/api/data"
);
const fetchStockDataAtom = atom(async (get) => {
  const response = await fetch(get(urlAtom));
  const data: Stock[] = await response.json();
  console.log(data);
  return data;
});

export default fetchStockDataAtom;
