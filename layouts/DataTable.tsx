import SimpleTable from "@/components/Tables/SimpleTable";
import getStockData from "@/core/api/getStockData";
import { useState } from "react";
import useSWR from "swr";

function DataTable() {
  const [isShowing, setIsShowing] = useState(true);
  const { data } = useSWR("/api/article", getStockData);

  const toggleBtn = () => {
    setIsShowing(!isShowing);
  };

  return (
    <>
      <div className="flex justify-center items-center gap-4">
        <h3 className="text-2xl">All Data</h3>
        <button
          onClick={toggleBtn}
          className={`my-2 px-2 py-2 border-2 rounded-md border-black transition-colors duration-200 ease-in-out 
          ${isShowing ? "bg-black text-white" : "bg-white text-black"}`}
        >
          {isShowing ? "Close" : "Open"}
        </button>
      </div>
      {isShowing ? <SimpleTable data={data} /> : null}
    </>
  );
}

export default DataTable;
