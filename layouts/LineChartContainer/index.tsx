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
  const [selectedTab, setSelectedTab] = useState("Close Chart");

  return (
    <div className="p-4 shadow-lg bg-white">
      <h3 className="text-2xl font-bold m-5">Line Chart</h3>
      <TabsPrimitive.Root
        defaultValue="Close Chart"
        onValueChange={setSelectedTab}
      >
        <TabsPrimitive.List
          className={clsx("flex w-full rounded-t-lg bg-white")}
        >
          {tabs.map(({ title }) => (
            <TabsPrimitive.Trigger
              key={`tab-trigger-${title}`}
              value={title}
              className={clsx(
                "group",
                "first:rounded-tl-lg last:rounded-tr-lg",
                "border first:border-r last:border-l",
                "border-gray-300",
                "flex-1 px-3 py-2.5",
                "z-10 outline-none ring-purple-500 ring-opacity-75",
                title === selectedTab
                  ? "border-2 border-purple-500"
                  : "focus:border-2 focus:border-purple-500 hover:border-2 hover:border-purple-500"
              )}
            >
              <span
                className={clsx(
                  "text-sm font-medium text-gray-700 focus:text-white"
                )}
              >
                {title}
              </span>
            </TabsPrimitive.Trigger>
          ))}
        </TabsPrimitive.List>
        {tabs.map(({ title, component }) => (
          <TabsPrimitive.Content
            key={`tab-content-${title}`}
            value={title}
            className={"border rounded-b-lg bg-white px-6 py-4 min-w-fit"}
          >
            {React.createElement(component)}
          </TabsPrimitive.Content>
        ))}
      </TabsPrimitive.Root>
    </div>
  );
}

export default LineChartContainer;
