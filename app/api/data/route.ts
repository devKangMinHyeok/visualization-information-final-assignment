import { NextResponse } from "next/server";
import readCSVFile from "@/util/readCSVFile";
import { Stock } from "stock-data";

interface IStockRaw {
  Date: string;
  Open: string;
  High: string;
  Low: string;
  Close: string;
  "Adj Close": string;
  Volume: string;
}

export async function GET(request: Request) {
  const dataPath = "./public/005930.KS_5y.csv";
  const json = (await readCSVFile(dataPath)) as IStockRaw[];
  const response = json.map((item) => {
    return {
      date: item.Date,
      open: Number(item.Open),
      high: Number(item.High),
      low: Number(item.Low),
      close: Number(item.Close),
      adjClose: Number(item["Adj Close"]),
      volume: Number(item.Volume),
    };
  });

  return NextResponse.json(response);
}
