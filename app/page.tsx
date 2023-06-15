"use client";

import DataTable from "@/layouts/DataTable";
import LineChartContainer from "@/layouts/LineChartContainer";

export default function Home() {
  return (
    <main>
      <div className="w-screen h-screen flex flex-col">
        <DataTable />
        <LineChartContainer />
      </div>
    </main>
  );
}
