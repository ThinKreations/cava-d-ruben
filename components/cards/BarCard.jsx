import { BarChart, Bar, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import styles from "@/styles/Component.module.css";

export default function BarCard({ label, data, series = [] }) {
    return (
        <div className={styles.card_cont}>
            <div className={styles.card}>
                <BarChart className={styles.chart} responsive data={data}>
                    <CartesianGrid stroke="rgba(200,200,225,0.3)" strokeDasharray="4 4" />
                    <XAxis
                        dataKey="name"
                        tick={{ fill: "rgb(160,160,190)", fontSize: 12 }}
                        stroke="rgba(200,200,225,0.35)"
                    />
                    <YAxis
                        width="auto"
                        tick={{ fill: "rgb(160,160,190)", fontSize: 11 }}
                        stroke="rgba(200,200,225,0.35)"
                    />
                    <Tooltip labelStyle={{ color: "rgb(100,100,125)", fontSize: "16px" }} cursor={{ fill: "rgba(180,180,205,0.15)" }} />
                    {series.length > 1 && <Legend />}
                    {series.map((s) => (
                        <Bar key={s.dataKey} dataKey={s.dataKey} name={s.name} fill={s.color} />
                    ))}
                </BarChart>
            </div>
            <span className={styles.card_label}>{label}</span>
        </div>
    );
}