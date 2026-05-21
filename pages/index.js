import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import { lineGraph } from "@/pages/logic";

/* Componentes */
import MainHead from "@/components/MainHead";
import Layout from "@/components/Layout";
import SearchBar from "@/components/SearchBar";
import LineCard from "@/components/cards/LineCard";

export default function Home({ raw, charts }) {
  const [term, setTerm] = useState(0); //Por el momento lo dejamos así xd luego lo hacemos funcionar

  return (
    <>
      <MainHead title="Cava D'Rubén PRO" />
      <Layout>
        <SearchBar />
        <div className={styles.card_container}>
          {term === 0 ? (
            Object.values(charts).map((chart, index) => {
              if (chart.type == "Line") {
                return (
                  <LineCard
                    label={chart.key}
                    data={chart.formattedData}
                    key={index}
                  />
                );
              } else if (chart.type == "Bar") {
                // Pues imprime barras xdXdxDXD
              }
            })
          ) : (
            <></>
          )}
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const transformers = {
    Line: lineGraph,
  };

  const res = await fetch("http://localhost:8000/dashboard", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const resJSON = await res.json();

  console.log(resJSON);
  const chartData = {};

  Object.entries(resJSON).forEach(([content, { tipo, data }]) => {
    const transformFunction = transformers[tipo];

    if (transformFunction) {
      chartData[content] = transformFunction(content, data);
    }
  });

  return {
    props: {
      raw: resJSON,
      charts: chartData,
    },
  };
}
