const PALETTE = [
  "rgb(180,180,210)",
  "rgb(125,165,220)",
  "rgb(210,145,165)",
  "rgb(150,195,180)",
  "rgb(215,190,150)",
];

const prettier = (str) =>
  String(str)
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

const buildChart = (type) => (key, data) => {
  if (!Array.isArray(data) || data.length === 0) {
    return { type, key, formattedData: [], series: [] };
  }

  const columns = Object.keys(data[0]);
  const nameKey = columns[0]; // Eje xd
  const seriesKeys = columns.slice(1); // Todos los datos, sean barras o series

  const formattedData = data.map((item) => {
    const row = { name: item[nameKey] };
    seriesKeys.forEach((k) => {
      row[k] = item[k];
    });
    return row;
  });

  const series = seriesKeys.map((k, i) => ({
    dataKey: k,
    name: prettier(k),
    color: PALETTE[i % PALETTE.length],
  }));

  return { type, key, formattedData, series };
};

export const lineGraph = buildChart("Line");
export const barGraph = buildChart("Bar");
export const pieGraph = buildChart("pie");

const transformers = { Line: lineGraph, Bar: barGraph, pie: pieGraph };

export const formatCharts = (resJSON) => {
  const chartData = {};
  if (!resJSON || typeof resJSON !== "object") return chartData;

  Object.entries(resJSON).forEach(([key, payload]) => {
    if (!payload || typeof payload !== "object") return;
    const { tipo, data } = payload;
    const transform = transformers[tipo];
    if (transform) chartData[key] = transform(key, data);
  });

  return chartData;
};
