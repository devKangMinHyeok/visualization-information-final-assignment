import SimpleTable from "@/components/Tables/SimpleTable";
import getStockData from "@/core/api/getStockData";
import { stockDataAtom } from "@/store/stockDataAtom";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import useSWR from "swr";

function DataTable() {
  const [isShowing, setIsShowing] = useState(false);
  const { data: apiData } = useSWR("/api/article", getStockData);
  const [data, setData] = useAtom(stockDataAtom);

  const toggleBtn = () => {
    setIsShowing(!isShowing);
  };

  useEffect(() => {
    if (apiData) {
      setData(apiData);
    }
  }, [apiData, setData]);

  return (
    <>
      <div className="flex justify-center items-center gap-4">
        <h3 className="text-2xl font-bold">All Data</h3>
        <button
          onClick={toggleBtn}
          className={`my-2 px-2 py-2 border-2 rounded-md border-black transition-colors duration-200 ease-in-out 
            ${isShowing ? "bg-black text-white" : "bg-white text-black"}`}
        >
          {isShowing ? "Close" : "Open"}
        </button>
      </div>
      {isShowing && data && (
        <div className="h-screen">
          <SimpleTable data={data} />
        </div>
      )}
    </>
  );
}

export default DataTable;
