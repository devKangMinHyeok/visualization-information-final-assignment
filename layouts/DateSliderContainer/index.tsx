import DateDoubleSlider from "@/components/Sliders/DateDoubleSlider";
import { dateRangeAtom } from "@/store/interactionDataAtom";
import { filteredDatesAtom } from "@/store/stockDataAtom";

import { useAtom, useSetAtom } from "jotai";

function DateSliderContainer() {
  const [filteredDates] = useAtom(filteredDatesAtom);
  const setDateRange = useSetAtom(dateRangeAtom);

  return (
    <>
      <DateDoubleSlider dates={filteredDates} setFunc={setDateRange} />
    </>
  );
}

export default DateSliderContainer;
