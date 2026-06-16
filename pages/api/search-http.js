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

export function buscar(filas) {
  const params = new URLSearchParams();
  for (const f of filas) {
    params.append("c", f.clase);
    params.append("v", f.elemento);
  }
  return getJSON(`/buscar/?${params.toString()}`);
}
