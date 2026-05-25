import CalendarGrid from "../components/CalendarGrid";
import DayCard from "../components/DayCard";
import MainHead from "@/components/MainHead";
import Layout from "@/components/Layout";

import styles from "@/styles/Home.module.css";

const pedidosData = [
  {
    id: 1,
    fecha: "2026-01-01",
    productos: "xd, xd, xd, xd",
    proveedor: "MCR GOD",
  },
  {
    id: 2,
    fecha: "2026-01-02",
    productos: "xd, xd, xd, xd",
    proveedor: "MCR GOD",
  },
  {
    id: 3,
    fecha: "2026-01-03",
    productos: "xd, xd, xd, xd",
    proveedor: "MCR GOD",
  },
];

export default function Calendar() {
  return (
    <>
      <MainHead title="Calendario | Cava D'Rubén" />

      <Layout>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "3rem",
            padding: "2rem",
          }}
        >
          {/* LADO IZQUIERDON */}
          <div style={{ flex: "1", minWidth: "300px", maxWidth: "450px" }}>
            <CalendarGrid eventos={pedidosData} año={2026} mes={4} />
          </div>

          {/* LADO DERECHON */}
          <div
            className={styles.card_container}
            style={{
              flex: "1",
              minWidth: "300px",
              maxWidth: "400px",
              margin: "0",
              padding: "1rem",
              gap: "1rem",
              flexDirection: "column",
            }}
          >
            {pedidosData.map((pedido) => (
              <DayCard
                key={pedido.id}
                id={pedido.id}
                fecha={pedido.fecha}
                productos={pedido.productos}
                proveedor={pedido.proveedor}
              />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
