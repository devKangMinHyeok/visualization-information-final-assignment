import React, { useState } from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { clsx } from "clsx";
import CloseChartView from "./CloseChartView";
import ProfitRateChartView from "./ProfitRateChartView";

const tabs = [
  {
    title: "Close Chart",
    component: CloseChartView,
  },
  {
    title: "Profit Rate Chart",
    component: ProfitRateChartView,
  },
];

function LineChartContainer() {
  const [selectedChart, setSelectedChart] = useState("Close Chart");

  return (
    <div className="w-full">
      <h3 className="text-2xl font-bold m-5">Line Chart</h3>
      <TabsPrimitive.Root defaultValue="Close Chart">
        <TabsPrimitive.List
          className={clsx("flex w-full rounded-t-lg bg-white")}
        >
          {tabs.map(({ title }) => (
            <TabsPrimitive.Trigger
              key={`tab-trigger-${title}`}
              value={title}
              className={clsx(
                "group",
                "border-b",
                "border-gray-300",
                "flex-1 px-3 py-2.5",
                "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
              )}
            >
              {title}
            </TabsPrimitive.Trigger>
          ))}
        </TabsPrimitive.List>
        {tabs.map(({ title, component }) => (
          <TabsPrimitive.Content
            key={`tab-content-${title}`}
            value={title}
            className={clsx("rounded-b-lg bg-white px-6 py-4")}
          >
            {React.createElement(component)}
          </TabsPrimitive.Content>
        ))}
      </TabsPrimitive.Root>
    </div>
  );
}

export default LineChartContainer;
