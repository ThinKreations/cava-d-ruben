import { useState, useCallback, useEffect } from "react";
import styles from "@/styles/Calendar.module.css";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";
import DayCard from "./DayCard";
import { MOCK_EVENTOS, fetchEventos, getMonthEvents } from "@/libs/calendarUtils";

export default function Calendar({
    initialYear = new Date().getFullYear(),
    initialMonth = new Date().getMonth(),
}) {
    const [year, setYear] = useState(initialYear);
    const [month, setMonth] = useState(initialMonth);
    const [selectedKey, setSelectedKey] = useState(null);
    const [eventos, setEventos] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        setEventos(MOCK_EVENTOS);
        setLoading(false);

    }, []);

    const goToPrev = useCallback(() => {
        setSelectedKey(null);
        if (month === 0) { setYear((y) => y - 1); setMonth(11); }
        else setMonth((m) => m - 1);
    }, [month]);

    const goToNext = useCallback(() => {
        setSelectedKey(null);
        if (month === 11) { setYear((y) => y + 1); setMonth(0); }
        else setMonth((m) => m + 1);
    }, [month]);

    // ── Selección de día ──
    const handleDayClick = useCallback((key) => {
        setSelectedKey((prev) => (prev === key ? null : key));
    }, []);

    const sidebarEventos = selectedKey
        ? eventos[selectedKey] || []
        : getMonthEvents(year, month, eventos);

    // ── Estados de carga / error ──
    if (loading) {
        return (
            <div className={styles.calRoot}>
                <p className={styles.calEmptyMsg}>Cargando calendario...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.calRoot}>
                <p className={styles.calEmptyMsg} style={{ color: "#c0392b" }}>
                    Error: {error}
                </p>
            </div>
        );
    }

    return (
        <div className={styles.calRoot}>
            <div className={styles.calLayout}>

                {/* Calendario */}
                <div className={styles.calTable}>
                    <CalendarHeader
                        month={month}
                        year={year}
                        onPrev={goToPrev}
                        onNext={goToNext}
                    />
                    <CalendarGrid
                        year={year}
                        month={month}
                        eventos={eventos}
                        selectedKey={selectedKey}
                        onDayClick={handleDayClick}
                    />
                </div>

                {/* Sidebar de eventos */}
                <aside className={styles.calSidebar} aria-label="Eventos del mes">
                    {sidebarEventos.length === 0 ? (
                        <p className={styles.calEmptyMsg}>Sin pedidos este mes.</p>
                    ) : (
                        sidebarEventos.map((ev) => (
                            <DayCard key={ev.id} evento={ev} highlighted={!!selectedKey} />
                        ))
                    )}
                </aside>

            </div>
        </div>
    );
}