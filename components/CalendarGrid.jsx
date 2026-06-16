import styles from '@/styles/Calendar.module.css';
import { WEEKDAYS, buildKey } from "@/libs/calendarUtils";


export default function CalendarGrid({ year, month, eventos, selectedKey, onDayClick }) {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const cells = [];

    // Celdas vacías antes del día 1
    for (let i = 0; i < firstDay; i++) {
        cells.push(
            <div key={`empty-${i}`} className={`${styles.calCell} ${styles.calCellEmpty}`} />
        );
    }

    // Días del mes
    for (let d = 1; d <= daysInMonth; d++) {
        const key = buildKey(year, month, d);
        const hasEvent = !!eventos[key];
        const isSelected = selectedKey === key;

        let cellClass = styles.calCell;
        if (hasEvent) cellClass += ` ${styles.calCellEvent}`;
        if (isSelected) cellClass += ` ${styles.calCellSelected}`;

        cells.push(
            <div
                key={key}
                className={cellClass}
                onClick={hasEvent ? () => onDayClick(key) : undefined}
                role={hasEvent ? "button" : undefined}
                aria-pressed={isSelected || undefined}
                aria-label={hasEvent ? `Ver eventos del día ${d}` : undefined}
                tabIndex={hasEvent ? 0 : undefined}
                onKeyDown={hasEvent ? (e) => e.key === "Enter" && onDayClick(key) : undefined}
            >
                {d}
                {hasEvent && <div className={styles.calEventDot} aria-hidden="true" />}
            </div>
        );
    }

    return (
        <>
            <div className={styles.calWeekdays}>
                {WEEKDAYS.map((d) => (
                    <div key={d} className={styles.calWeekday}>{d}</div>
                ))}
            </div>
            <div className={styles.calGrid} role="grid" aria-label="Cuadrícula del calendario">
                {cells}
            </div>
        </>
    );
}