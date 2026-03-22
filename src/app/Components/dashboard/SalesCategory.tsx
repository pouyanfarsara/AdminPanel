import styles from "./SalesCategory.module.css";

export type SalesItem = {
  id: number;
  name: string;
  color: string;
  percent: number;
};

type SalesCategoryProps = {
  items: SalesItem[];
};

export default function SalesCategory({ items }: SalesCategoryProps) {
  return (
    <div className={styles.card}>
      <h3>Sales by Category</h3>

      <div className={styles.list}>
        {items.map((item) => (
          <div key={item.id} className={styles.row}>
            <div className={styles.top}>
              <div className={styles.label}>
                <span
                  className={styles.dot}
                  style={{ backgroundColor: item.color }}
                />
                <p>{item.name}</p>
              </div>
              <span className={styles.percent}>{item.percent}%</span>
            </div>

            <div className={styles.progressTrack}>
              <div
                className={styles.progressFill}
                style={{
                  width: `${item.percent}%`,
                  backgroundColor: item.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}