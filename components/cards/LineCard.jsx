import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { RechartsDevtools } from '@recharts/devtools'

import styles from "@/styles/Component.module.css"
import { BiBorderRadius } from 'react-icons/bi'


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




export default function LineCard(data) {
    console.log(data)
    return (
        <div className={styles.card_cont}>
            <div className={styles.card}>
                <LineChart className={styles.chart} responsive data={data.data}>
                    <Line dataKey={"value"} />
                    <CartesianGrid stroke="rgba(200,200,225,0.3)" strokeDasharray="4 4" />
                    <Tooltip labelStyle={{ color: 'rgb(100,100,125)', fontSize: '16px' }} />
                    <XAxis dataKey="name" height={20} />                    <YAxis label={{ value: 'Value', position: 'inside', angle: -90 }} />
                    <RechartsDevtools />
                </LineChart>

            </div>
            <span className={styles.card_label}>{data.label}</span>
        </ div>
    )
}