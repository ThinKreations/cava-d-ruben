import styles from '@/styles/Calendar.module.css';

export default function DayCard({ evento, highlighted = false }) {
    return (
        <div className={`${styles.calCard} ${highlighted ? styles.calCardHighlight : ""}`}>
            <div className={styles.calCardTitle}>
                {evento.tipo} #{evento.id}
            </div>
            <div className={styles.calCardField}>
                Fecha estimada: <span>{evento.fecha}</span>
            </div>
            <div className={styles.calCardField}>
                Productos: <span>{evento.productos}</span>
            </div>
            <div className={styles.calCardField}>
                Proveedor: <span>{evento.proveedor}</span>
            </div>
            {evento.notas && (
                <div className={styles.calCardField}>
                    Notas: <span>{evento.notas}</span>
                </div>
            )}
        </div>
    );
}