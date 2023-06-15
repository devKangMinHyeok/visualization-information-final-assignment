"use client";

import DataTable from "@/layouts/DataTable";
import LineChartContainer from "@/layouts/LineChartContainer";
import RadarChartContainer from "@/layouts/RadarChartContainer";

export default function Home() {
  return (
    <main>
      <div className="w-screen h-screen flex flex-col">
        <DataTable />
        <div className="w-full flex gap-5 p-5">
          <LineChartContainer />
          <RadarChartContainer />
        </div>
      </div>
    </main>
  );
}
