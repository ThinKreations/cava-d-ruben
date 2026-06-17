export const MONTHS = [
  "ENERO",
  "FEBRERO",
  "MARZO",
  "ABRIL",
  "MAYO",
  "JUNIO",
  "JULIO",
  "AGOSTO",
  "SEPTIEMBRE",
  "OCTUBRE",
  "NOVIEMBRE",
  "DICIEMBRE",
];

export const WEEKDAYS = ["D", "L", "M", "W", "J", "V", "S"];

function transformarCalendario(data) {
  const eventos = {};

  data.forEach((diaData) => {
    const fechaRaw = diaData.fecha_entrega;
    const [year, month, day] = fechaRaw.split("-").map(Number);
    const key = `${year}-${month}-${day}`;

    eventos[key] = diaData.pedidos.map((pedido) => ({
      id: pedido.pedido_id,
      tipo: "Pedido",
      fecha: formatearFecha(fechaRaw),
      productos: pedido.prodcutos?.map((p) => p.nombre).join(", ") || "—",
      proveedor: pedido.proveedor || "—",
      notas: `Total: $${pedido.total?.toFixed(2) ?? "0.00"}`,
    }));
  });
  return eventos;
}

function formatearFecha(fechaISO) {
  const [year, month, day] = fechaISO.split("-");
  return `${day}/${month}/${year}`;
}

export function buildKey(year, month, day) {
  return `${year}-${month + 1}-${day}`;
}

export function getMonthEvents(year, month, eventos) {
  const result = [];
  const days = new Date(year, month + 1, 0).getDate();
  for (let d = 1; d <= days; d++) {
    const key = buildKey(year, month, d);
    if (eventos[key]) result.push(...eventos[key]);
  }
  return result;
}
