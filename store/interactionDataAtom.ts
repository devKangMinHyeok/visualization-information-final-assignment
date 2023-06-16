import { atom } from "jotai";
import { IDateRange } from "system-state";

export const hoverTimeAtom = atom<string>("2013-10-30");

export const dateRangeAtom = atom<IDateRange>({
  start: new Date("2013-10-30"),
  end: new Date("2018-10-29"),
});
