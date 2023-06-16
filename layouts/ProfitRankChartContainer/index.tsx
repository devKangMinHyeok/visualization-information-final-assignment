import React, { useState } from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import clsx from "clsx";
import BestProfitChartView from "./BestProfitChartView";
import WorstProfitChartView from "./WorstProfitChartView";
import { useAtom } from "jotai";
import { dateRangeAtom } from "@/store/interactionDataAtom";
import formatDate from "@/util/formatDate";

const tabs = [
  {
    title: "Best Top 5",
    component: BestProfitChartView,
  },
  {
    title: "Worst Top 5",
    component: WorstProfitChartView,
  },
];

function ProfitRankChartContainer() {
  const [dateRange] = useAtom(dateRangeAtom);
  const [selectedTab, setSelectedTab] = useState("Best Top 5");

  return (
    <div className="flex-auto h-full bg-white p-5">
      <h3 className="text-lg font-bold m-2">Profit Rate</h3>
      <TabsPrimitive.Root
        defaultValue="Best Top 5"
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
                  " text-xs font-medium text-gray-700 focus:text-white"
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
      <div className="flex justify-end">
        <p className="text-xs font-medium text-gray-700">
          {formatDate(dateRange.start)} ~ {formatDate(dateRange.end)}
        </p>
      </div>
    </div>
  );
}

export default ProfitRankChartContainer;
