"use client";

import SimpleTable from "@/components/Tables/SimpleTable";
import getStockData from "@/core/api/getStockData";
import DataTable from "@/layouts/DataTable";

export default function Home() {
  return (
    <main>
      <div className="w-screen h-screen">
        <DataTable />
      </div>
    </main>
  );
}
