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

export const MOCK_EVENTOS = {
  "2026-5-6": [
    {
      id: 445,
      tipo: "Pedido",
      fecha: "06/05/2026",
      productos: "Malbec, Cab. Sauv., Merlot",
      proveedor: "Viñedos Mius",
      notas: "Entrega en bodega norte",
    },
  ],
  "2026-5-15": [
    {
      id: 446,
      tipo: "Pedido",
      fecha: "15/05/2026",
      productos: "Tempranillo, Syrah, Rosé",
      proveedor: "Viñedos Mius",
      notas: "Requiere refrigeración",
    },
  ],
  "2026-5-18": [
    {
      id: 447,
      tipo: "Cata",
      fecha: "18/05/2026",
      productos: "Pinot Noir, Riesling",
      proveedor: "Cava D. Rubén",
      notas: "Cata de selección trimestral",
    },
  ],
  "2026-5-26": [
    {
      id: 448,
      tipo: "Pedido",
      fecha: "26/05/2026",
      productos: "Chardonnay, Viognier",
      proveedor: "Viñedos Mius",
      notas: "Pago pendiente",
    },
  ],
  "2026-6-3": [
    {
      id: 449,
      tipo: "Inventario",
      fecha: "03/06/2026",
      productos: "Stock general bodega",
      proveedor: "—",
      notas: "Conteo físico mensual",
    },
  ],
  "2026-6-12": [
    {
      id: 450,
      tipo: "Cata",
      fecha: "12/06/2026",
      productos: "Malbec reserva 2022",
      proveedor: "Cava D. Rubén",
      notas: "Degustación clientes VIP",
    },
  ],
  "2026-6-20": [
    {
      id: 451,
      tipo: "Pedido",
      fecha: "20/06/2026",
      productos: "Cabernet, Torrontés",
      proveedor: "Viñedos Altamira",
      notas: "",
    },
  ],
};

export async function fetchEventos() {
  const res = await fetch("http://localhost:8000/calendario/", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) throw new Error(`Error del servidor: ${res.status}`);

  const data = await res.json();
  return transformarCalendario(data);
}

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
