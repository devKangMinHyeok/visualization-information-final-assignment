import React from "react";

interface FormatedDataProps {
  data: Date | Number;
}

const TableData: React.FC<FormatedDataProps> = ({ data }) => {
  if (!data) return null;
  const formattedData = data.toLocaleString();
  return <td className="py-2 px-4 border text-center">{formattedData}</td>;
};

export default TableData;
