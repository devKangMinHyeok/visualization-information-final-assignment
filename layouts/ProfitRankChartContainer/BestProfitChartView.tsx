import HorizontalBarChart from "@/components/Charts/HorizontalBarChart";
import { profitRateDesSortAtom } from "@/store/stockDataAtom";
import { useAtom } from "jotai";

function BestProfitChartView() {
  const [profitRateDes] = useAtom(profitRateDesSortAtom);

  return (
    <div>
      {profitRateDes ? (
        <HorizontalBarChart
          inputData={profitRateDes.slice(0, 5)}
          borderColor="rgb(181, 0, 39)"
          backgroundColor="rgba(217, 0, 47, 0.85)"
        />
      ) : null}
    </div>
  );
}

export default BestProfitChartView;
