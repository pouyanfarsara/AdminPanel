import styles from "./RevenueChart.module.css";

type RevenueItem={
    month:string,
    value:number,

}
 type RevenueChartProps={
    data:RevenueItem[]
 }

export default function RevenueChart({ data }:RevenueChartProps) {
  return (
    <div className={styles.card}>
      <h3>Revenue Overview</h3>

      <div className={styles.chartWrapper}>
        <div className={styles.chart}>
          {data.map((item) => (
            <div key={item.month} className={styles.barItem}>
              <div
                className={styles.bar}
                style={{ height: `${item.value * 3}px` }}
              />
              <span>{item.month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}