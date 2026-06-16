import styles from '@/styles/Calendar.module.css';
import { MONTHS } from "@/libs/calendarUtils";

export default function CalendarHeader({ month, year, onPrev, onNext }) {
    return (
        <div className={styles.calHeader}>
            <button className={styles.calNavBtn} onClick={onPrev} aria-label="Mes anterior">
                &#8592;
            </button>
            <span className={styles.calMonthTitle}>
                {MONTHS[month]} {year}
            </span>
            <button className={styles.calNavBtn} onClick={onNext} aria-label="Mes siguiente">
                &#8594;
            </button>
        </div>
    );
}