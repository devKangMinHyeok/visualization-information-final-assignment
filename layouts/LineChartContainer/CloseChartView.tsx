import LineChart from "@/components/Charts/LineChart";
import { transformedStockDataAtom } from "@/store/stockDataAtom";
import { useAtom } from "jotai";

function CloseChartView() {
  const [data] = useAtom(transformedStockDataAtom);

  return <div className=" m-5">{data ? <LineChart data={data} /> : null}</div>;
}

export default CloseChartView;
