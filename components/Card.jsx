import { Line, LineChart } from 'recharts'
import { RechartsDevtools } from '@recharts/devtools'

import styles from "@/styles/Component.module.css"

const datos = [
    {
        name: 'Page A',
        uv: 400,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 300,
        pv: 4567,
        amt: 2400,
    },
    {
        name: 'Page C',
        uv: 320,
        pv: 1398,
        amt: 2400,
    },
    {
        name: 'Page D',
        uv: 200,
        pv: 9800,
        amt: 2400,
    },
    {
        name: 'Page E',
        uv: 278,
        pv: 3908,
        amt: 2400,
    },
    {
        name: 'Page F',
        uv: 189,
        pv: 4800,
        amt: 2400,
    },
];

export default function Card(data) {
    return (
        <div className={styles.card_cont}>
            <div className={styles.card}>
                <LineChart className={styles.chart} responsive data={datos}>
                    <Line dataKey="uv" />
                    <RechartsDevtools />
                </LineChart>

            </div>
            <span className={styles.card_label}>{data.label}</span>
        </ div>
    )
}