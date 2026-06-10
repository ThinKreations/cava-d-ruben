import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import styles from "@/styles/Component.module.css"
import { RechartsDevtools } from '@recharts/devtools'


export default function BarCard(data) {
    return (
        <div className={styles.card_cont}>
            <div className={styles.card}>
                <BarChart className={styles.chart} responsive data={data.data}>
                    <Tooltip labelStyle={{ color: 'rgb(100,100,125)', fontSize: '16px' }} />
                    <data value={data.data}></data>
                    <XAxis dataKey="name" height={20} />
                    <YAxis dataKey="value" width={'auto'} />
                    <Bar dataKey="value" stackId="xd" fill="rgb(180,180,200)" />
                </BarChart>
            </div>
            <span className={styles.card_label}>{data.label}</span>
        </ div>
    )
}