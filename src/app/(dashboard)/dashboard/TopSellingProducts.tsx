import styles from "./TopSellingProducts.module.css";

type ProductItem = {
  id: number;
  name: string;
  sales: number;
  amount: string;
};

type TopSellingProducts = {
  items: ProductItem[];
};
export default function TopSellingProducts({ items }: TopSellingProducts) {
  return (
    <div className={styles.card}>
      <h3>Top Selling Products</h3>

      <div className={styles.list}>
        {items.map((item, index) => (
          <div key={item.id} className={styles.row}>
            <div className={styles.left}>
              <div className={styles.index}>{index + 1}</div>
              <div>
                <h4>{item.name}</h4>
                <p>{item.sales} sales</p>
              </div>
            </div>

            <div className={styles.amount}>{item.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
