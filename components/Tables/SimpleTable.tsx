import React from "react";
import { Stock } from "stock-data";
import TableData from "./TableData";

const SimpleTable = ({ data }: { data: Stock[] }) => {
  if (!data) return null;

  return (
    <div className="overflow-auto h-3/4 w-3/4 m-auto border-2">
      <table className="table-auto w-full divide-y divide-gray-200 border-1">
        <thead className="bg-black text-white sticky top-0">
          <tr>
            {data &&
              data[0] &&
              Object.keys(data[0]).map((value, idx) => (
                <th
                  key={idx}
                  className="text-center px-6 py-3 text-xs font-medium text-white uppercase tracking-wider border"
                >
                  {value}
                </th>
              ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data &&
            data.map((item, index) => (
              <tr key={index}>
                {Object.values(item).map((value, idx) => (
                  <TableData key={idx} data={value} />
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default SimpleTable;
