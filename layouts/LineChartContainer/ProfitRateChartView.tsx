import LineChart from "@/components/Charts/LineChart";
import { profitRateAtom } from "@/store/stockDataAtom";
import { useAtom } from "jotai";

function ProfitRateChartView() {
  const [data] = useAtom(profitRateAtom);

  return <div className=" m-5">{data ? <LineChart data={data} /> : null}</div>;
}

export default ProfitRateChartView;
