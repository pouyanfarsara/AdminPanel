import styles from "./RecentOrders.module.css";
import type { OrderItem } from "../../data/dashboardData";

type RecentOrdersProps = {
  items: OrderItem[];
};

export default function RecentOrders({ items }: RecentOrdersProps) {
  return (
    <div className={styles.card}>
      <h3>Recent Orders</h3>

      <div className={styles.list}>
        {items.map((item) => (
          <div key={item.id} className={styles.row}>
            <div>
              <p className={styles.orderId}>{item.id}</p>
              <p className={styles.customer}>{item.customer}</p>
            </div>

            <div className={styles.right}>
              <span className={styles.price}>{item.price}</span>
              <span className={styles.status}>{item.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}