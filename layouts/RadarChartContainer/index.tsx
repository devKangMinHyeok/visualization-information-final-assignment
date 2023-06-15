import RadarChart from "@/components/Charts/RadarChart";
import { hoverTimeAtom } from "@/store/interactionDataAtom";
import { stockDataObjectAtom } from "@/store/stockDataAtom";
import { useAtomValue } from "jotai";
import { useEffect } from "react";

function RadarChartContainer() {
  const stockData = useAtomValue(stockDataObjectAtom);
  const hoverTime = useAtomValue(hoverTimeAtom);

  return (
    <div className="flex-2 h-3/5 flex flex-col justify-center items-center shadow-lg bg-white">
      {stockData && stockData[hoverTime] && (
        <RadarChart data={stockData[hoverTime]} />
      )}
    </div>
  );
}

export default RadarChartContainer;
