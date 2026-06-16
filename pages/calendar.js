import Layout from "@/components/Layout";
import Calendar from "@/components/Calendar";
import MainHead from "@/components/MainHead";

export default function CalendarPage() {
  return (
    <>
      <MainHead title="Calendario" />
      <Layout>
        <Calendar />
      </Layout>
    </>
  );
}
