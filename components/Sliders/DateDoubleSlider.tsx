import React, { use, useEffect, useState } from "react";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import formatDate from "@/util/formatDate";
import { IDateRange } from "system-state";
import TooltipSlider from "./TooltipSlider";

interface IMarks {
  [key: string]: any;
}

const createMarks = (dates: Date[]): IMarks => {
  const marks: IMarks = {};

  dates.forEach((date, idx) => {
    const timeStr = formatDate(date);
    marks[idx] = timeStr;
  });

  return marks;
};

interface DateDoubleSliderProps {
  dates: Date[];
  setFunc: (newValue: IDateRange) => void;
}

function DateDoubleSlider({ dates, setFunc }: DateDoubleSliderProps) {
  const [marks, setMarks] = useState<IMarks>({});

  const changeHandler = (value: any) => {
    setFunc({
      start: new Date(marks[value[0]]),
      end: new Date(marks[value[1]]),
    });
  };

  useEffect(() => {
    if (dates.length > 1) setMarks(createMarks(dates));
  }, [dates]);

  return (
    <div>
      <div style={{ width: "80%", margin: 50 }}>
        {dates.length ? (
          <TooltipSlider
            range
            min={0}
            max={dates.length - 1}
            step={1}
            onChange={changeHandler}
            defaultValue={[0, dates.length - 1]}
            allowCross={false}
            pushable
            tipFormatter={(value) => `${marks[value]}`}
            tipProps={{
              visible: true,
              defaultVisible: true,
              placement: "bottom",
            }}
            trackStyle={[{ backgroundColor: "#6700dd" }]}
            railStyle={{ backgroundColor: "#6700dd20" }}
            dotStyle={{ backgroundColor: "#6700dd" }}
            activeDotStyle={{ backgroundColor: "#6700dd" }}
            handleStyle={[
              { backgroundColor: "#6700dd", borderColor: "#ffffff" }, // 레인지 슬라이더의 경우, 각 핸들에 대한 스타일을 배열로 제공할 수 있습니다.
              { backgroundColor: "#6700dd", borderColor: "#ffffff" },
            ]}
          />
        ) : null}
      </div>
    </div>
  );
}
export default DateDoubleSlider;
