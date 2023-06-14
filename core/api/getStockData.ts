const getStockData = async () => {
  const response = await fetch("/api/data");
  const data = await response.json();
  return data;
};

export default getStockData;
