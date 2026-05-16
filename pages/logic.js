/* Esto es para convertir los datos recibidos del back para que jalen bien en las gráficas */

/* Gráficos lineares */

export const lineGraph = (key, JSON) => {
  /* Si los datos son fecha/valor INDIVIDUALES */

  const formattedData = JSON.map((item) => ({
    name: Object.values(item)[0],
    value: Object.values(item)[1],
    pv: 2400,
    amt: 2400,
  }));

  return {
    type: "Line",
    key,
    formattedData,
  };
};
/*
export const barGraph = (key, data) => {
  //console.log(key, data);
};
export const pieGraph = (key, data) => {
  //console.log(data);
};
*/
