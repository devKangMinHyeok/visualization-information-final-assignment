import SimpleTable from "@/components/Tables/SimpleTable";
import getStockData from "@/core/api/getStockData";
import { stockDataAtom } from "@/store/stockDataAtom";
import { useAtom } from "jotai";
import { useEffect, useState, useRef } from "react";
import useSWR from "swr";

function DataTableContainer() {
  const [isShowing, setIsShowing] = useState(true);
  const { data: apiData } = useSWR("/api/article", getStockData);
  const [data, setData] = useAtom(stockDataAtom);

  const tableRef = useRef<HTMLDivElement>(null);

  const toggleBtn = () => {
    setIsShowing(!isShowing);
    if (isShowing && tableRef.current) {
      tableRef.current.scrollIntoView({ behavior: "smooth", block: "end" }); // block: 'start' 추가
    }
  };

  useEffect(() => {
    if (apiData) {
      setData(apiData);
    }
  }, [apiData, setData]);

  return (
    <>
      <div className="flex justify-center items-center gap-4" ref={tableRef}>
        <h3 className="text-2xl font-bold">All Data</h3>
        <button
          onClick={toggleBtn}
          className={`my-2 px-2 py-2 border-2 rounded-md border-purple-800 transition-colors duration-200 ease-in-out 
            ${
              isShowing
                ? "bg-purple-800 text-white"
                : "bg-white text-purple-800"
            }`}
        >
          {isShowing ? <p>Close &uarr;</p> : <p>Open &darr;</p>}
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

export default DataTableContainer;
