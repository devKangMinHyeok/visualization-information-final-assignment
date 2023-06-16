import HorizontalBarChart from "@/components/Charts/HorizontalBarChart";
import { profitRateAscSortAtom } from "@/store/stockDataAtom";
import { useAtom } from "jotai";

function WorstProfitChartView() {
  const [profitRateAsc] = useAtom(profitRateAscSortAtom);
  return (
    <div>
      {profitRateAsc ? (
        <HorizontalBarChart
          inputData={profitRateAsc.slice(0, 5)}
          borderColor="rgb(18, 0, 181)"
          backgroundColor="rgba(0, 42, 255, 0.805)"
        />
      ) : null}
    </div>
  );
}

export default WorstProfitChartView;
