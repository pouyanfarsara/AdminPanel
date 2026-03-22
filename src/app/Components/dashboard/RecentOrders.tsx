import styles from "./RecentOrders.module.css";
type orderItem = {
  id: number;
  customer: string;
  price: string;
  status: "Delivered" | "Processing" | "Pending" | "Shipped";
};
type RecentOrdersProps = {
  items: orderItem[];
};

function getStatusClass(status: orderItem["status"]) {
  switch (status) {
    case "Delivered":
      return "delivered";
    case "Processing":
      return "processing";
    case "Shipped":
      return "shipped";
    case "Pending":
      return "pending";
    default:
      return "";
  }
}

export default function RecentOrders({ items }: RecentOrdersProps) {
  return (
    <div className={styles.card}>
      <h3>Recent Orders</h3>

      <div className={styles.list}>
        {items.map((item) => (
          <div key={item.id} className={styles.row}>
            <div>
              <h4>{item.id}</h4>
              <p>{item.customer}</p>
            </div>

            <div className={styles.right}>
              <strong>{item.price}</strong>
              <span
                className={`${styles.badge} ${styles[getStatusClass(item.status)]}`}
              >
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
