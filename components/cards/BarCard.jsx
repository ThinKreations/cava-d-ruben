import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

export default function BarCard(data) {
    return (
        <div className={styles.card_cont}>
            <div className={styles.card}>
                <BarChart className={styles.chart} responsive data={data.data}>
                    <Bar dataKey={"value"} />
                    <CartesianGrid stroke="rgba(200,200,225,0.3)" strokeDasharray="4 4" />
                    <Tooltip labelStyle={{ color: 'rgb(100,100,125)', fontSize: '16px' }} />
                    <XAxis dataKey="name" height={20} />
                    <YAxis width={'auto'} />
                    <RechartsDevtools />
                </BarChart>

            </div>
            <span className={styles.card_label}>{data.label}</span>
        </ div>
    )
}