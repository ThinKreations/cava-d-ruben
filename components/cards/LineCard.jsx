import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { RechartsDevtools } from '@recharts/devtools'

import styles from "@/styles/Component.module.css"

export default function LineCard(data) {

    return (
        <div className={styles.card_cont}>
            <div className={styles.card}>
                <LineChart className={styles.chart} responsive data={data.data}>
                    <Line dataKey={"value"} />
                    <CartesianGrid stroke="rgba(200,200,225,0.3)" strokeDasharray="4 4" />
                    <Tooltip labelStyle={{ color: 'rgb(100,100,125)', fontSize: '16px' }} />
                    <XAxis dataKey="name" height={20} />
                    <YAxis width={'auto'} />
                    <RechartsDevtools />
                </LineChart>

            </div>
            <span className={styles.card_label}>{data.label}</span>
        </ div>
    )
}