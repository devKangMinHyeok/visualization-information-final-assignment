"use client";

import DataTable from "@/layouts/DataTableContainer";
import DateSliderContainer from "@/layouts/DateSliderContainer";
import LineChartContainer from "@/layouts/LineChartContainer";
import ProfitRankChartContainer from "@/layouts/ProfitRankChartContainer";
import RadarChartContainer from "@/layouts/RadarChartContainer";
import { useEffect } from "react";
import { Userpilot } from "userpilot";

export default function Home() {
  useEffect(() => {
    Userpilot.initialize("NX-be3f6990");
    Userpilot.identify("1", {
      name: "강민혁",
      email: "rkdalsgur032@gmail.com",
      created_at: "2021-06-01T00:00:00.000Z",
    });
  }, []);

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
