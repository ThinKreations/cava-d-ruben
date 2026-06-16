import styles from "@/styles/Home.module.css";
import { useState, useCallback } from "react";
import { lineGraph, barGraph, formatCharts } from "@/libs/logic";

import MainHead from "@/components/MainHead";
import Layout from "@/components/Layout";
import SearchBar from "@/components/SearchBar";
import LineCard from "@/components/cards/LineCard";
import BarCard from "@/components/cards/BarCard";

export default function Home({ raw, charts, selects }) {
  const [activeCharts, setActiveCharts] = useState(charts);

  const handleResultados = useCallback(
    (data) => {
      if (!data) {
        setActiveCharts(charts);
        return;
      }
      setActiveCharts(formatCharts(data));
    },
    [charts],
  );

  return (
    <>
      <MainHead title="Cava D'Rubén" />
      <Layout>
        <SearchBar selects={selects} onResults={handleResultados} />
        <div className={styles.card_container}>
          {Object.values(activeCharts).map((chart, index) => {
            if (chart.type === "Line")
              return (
                <LineCard
                  label={chart.key}
                  data={chart.formattedData}
                  series={chart.series}
                  key={index}
                />
              );
            if (chart.type === "Bar")
              return (
                <BarCard
                  label={chart.key}
                  data={chart.formattedData}
                  series={chart.series}
                  key={index}
                />
              );
            return null;
          })}
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const [resDash, resGeneral] = await Promise.all([
    fetch("http://localhost:8000/dashboard", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }),
    fetch("http://localhost:8000/general/"),
  ]);
  const resJSON = await resDash.json();
  console.log(resJSON);

  const selects = await resGeneral.json();

  return {
    props: {
      raw: resJSON,
      charts: formatCharts(resJSON),
      selects,
    },
  };
}
