import styles from "@/styles/Home.module.css";

/* Componentes */
import MainHead from "@/components/MainHead";
import Layout from "@/components/Layout";
import SearchBar from "@/components/SearchBar";
import Card from "@/components/Card";

export default function Home() {
  return (
    <>
      <MainHead title="Cava D'Rubén PRO" />
      <Layout>
        <SearchBar />
        <div className={styles.card_container}>
          <Card label="1" />
          <Card label="2" />
          <Card label="3 xd" />
          <Card label="Caben 4 por fila" />
        </div>
      </Layout>
    </>
  );
}
