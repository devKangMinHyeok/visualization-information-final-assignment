"use client";

import DataTable from "@/layouts/DataTableContainer";
import DateSliderContainer from "@/layouts/DateSliderContainer";
import LineChartContainer from "@/layouts/LineChartContainer";
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
          <RadarChartContainer />
        </div>
        <DataTable />
      </div>
    </main>
  );
}
