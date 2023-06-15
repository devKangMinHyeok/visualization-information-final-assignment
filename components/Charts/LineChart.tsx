import { createChart, ColorType } from "lightweight-charts";
import React, { useEffect, useRef } from "react";
import { useSetAtom } from "jotai";
import { hoverTimeAtom } from "@/store/interactionDataAtom";

export const LineChart = ({ ...props }) => {
  const setHoverData = useSetAtom(hoverTimeAtom);

  const {
    data,
    colors: {
      backgroundColor = "white",
      lineColor = "#6700dd",
      textColor = "black",
      areaTopColor = "rgba(144, 0, 255, 0.87)",
      areaBottomColor = "rgba(144, 0, 255, 0.2)",
    } = {},
  } = props;

  const chartContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const handleResize = () => {
      if (chartContainerRef.current)
        chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: backgroundColor },
        textColor,
      },
      width: chartContainerRef.current.clientWidth,
      height: 300,
    });
    chart.timeScale().fitContent();

    const newSeries = chart.addAreaSeries({
      lineColor,
      topColor: areaTopColor,
      bottomColor: areaBottomColor,
    });
    newSeries.setData(data);

    window.addEventListener("resize", handleResize);

    chart.subscribeCrosshairMove((param) => {
      if (param.time && param.seriesData.size) {
        const hoverData = param.time.toString();
        setHoverData(hoverData);
      }
    });

    return () => {
      window.removeEventListener("resize", handleResize);

      chart.remove();
    };
  }, [
    data,
    backgroundColor,
    lineColor,
    textColor,
    areaTopColor,
    areaBottomColor,
    setHoverData,
  ]);

  useEffect(() => {});

  return <div ref={chartContainerRef} />;
};

export default LineChart;
