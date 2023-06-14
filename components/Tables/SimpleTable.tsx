import React from "react";
import { Stock } from "stock-data";
import TableData from "./TableData";

const SimpleTable = ({ data }: { data: Stock[] }) => {
  return (
    <div className="overflow-auto h-1/3 w-full">
      <table className="table-auto w-full divide-y divide-gray-200">
        <thead className="bg-gray-50 sticky top-0">
          <tr>
            {data &&
              Object.keys(data[0]).map((value, idx) => (
                <th
                  key={idx}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border"
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
