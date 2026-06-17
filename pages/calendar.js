import Layout from "@/components/Layout";
import Calendar from "@/components/Calendar";
import MainHead from "@/components/MainHead";
import transformarCalendario from "@/libs/calendarUtils";

export default function CalendarPage({ eventos }) {
  return (
    <>
      <MainHead title="Calendario" />
      <Layout>
        <Calendar data={eventos} />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:8000/calendario/", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  const resJSON = await res.json();
  console.log(resJSON[0].pedidos[0]);

  return {
    props: {
      eventos: transformarCalendario(resJSON),
    },
  };
}
