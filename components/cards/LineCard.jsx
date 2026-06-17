import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import styles from "@/styles/Component.module.css";

export default function LineCard({ label, data, series = [] }) {
    return (
        <div className={styles.card_cont}>
            <div className={styles.card}>
                <LineChart className={styles.chart} responsive data={data}>
                    <CartesianGrid stroke="rgba(200,200,225,0.3)" strokeDasharray="4 4" />
                    <XAxis
                        dataKey="name"
                        tick={{ fill: "rgb(160,160,190)", fontSize: 12 }}
                        stroke="rgba(200,200,225,0.35)"
                    />
                    <YAxis
                        width="auto"
                        tick={{ fill: "rgb(160,160,190)", fontSize: 12 }}
                        stroke="rgba(200,200,225,0.35)"
                    />
                    <Tooltip labelStyle={{ color: "rgb(100,100,125)", fontSize: "16px" }} />
                    {series.length > 1 && <Legend />}
                    {series.map((s) => (
                        <Line
                            key={s.dataKey}
                            dataKey={s.dataKey}
                            name={s.name}
                            stroke={s.color}
                            dot={{
                                fill: 'var(--color-surface-base)',
                            }}
                            activeDot={{
                                stroke: 'var(--color-surface-base)',
                            }}
                        />
                    ))}
                </LineChart>
            </div>
            <span className={styles.card_label}>{label}</span>
        </div>
    );
}