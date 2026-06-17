export async function getJSON(path) {
  const res = await fetch(`http://localhost:8000${path}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error(`Error ${res.status} en ${path}`);
  }
  return res.json();
}

export function buscar(filas, data) {
  const ini = data.ini;
  const fin = data.fin;
  const params = new URLSearchParams();
  for (const f of filas) {
    params.append("c", f.clase);
    params.append("v", f.elemento);
  }
  if (ini) params.append("ini", ini);
  if (fin) params.append("fin", fin);
  return getJSON(`/buscar/?${params.toString()}`);
}
