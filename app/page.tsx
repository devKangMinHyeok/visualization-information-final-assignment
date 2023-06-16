"use client";

import DataTable from "@/layouts/DataTableContainer";
import DateSliderContainer from "@/layouts/DateSliderContainer";
import LineChartContainer from "@/layouts/LineChartContainer";
import ProfitRankChartContainer from "@/layouts/ProfitRankChartContainer";
import RadarChartContainer from "@/layouts/RadarChartContainer";

export default function Home() {
  return (
    <main>
      <div className="w-screen h-screen flex flex-col">
        <div className="w-full flex gap-5 p-5">
          <div className="flex-1">
            <LineChartContainer />
            <DateSliderContainer />
          </div>
          <div className="flex-2 flex flex-col gap-5">
            <RadarChartContainer />
            <ProfitRankChartContainer />
          </div>
        </div>
        <DataTable />
      </div>
    </main>
  );
}
