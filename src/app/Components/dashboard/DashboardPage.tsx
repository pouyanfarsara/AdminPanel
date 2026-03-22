
import styles from "./DashboardPage.module.css";

import {
  statsData,
  revenueData,
  salesCategories,
  topSellingProducts,
  recentOrders,
} from "../../data/dashboardData";

import StatCard from "./StatCard";
import RevenueChart from "./RevenueChart";
import SalesCategory from "./SalesCategory";
import TopSellingProducts from "./TopSellingProducts";
import RecentOrders from "./RecentOrders";

export default function DashboardPage() {
  return (
    <div className={styles.dashboardLayout}>
      <div className={styles.mainSection}>
        <main className={styles.content}>
          <div className={styles.pageTitle}>
            <h1>Dashboard</h1>
            <p>
              Welcome back! Here&apos;s what&apos;s happening with your store
              today.
            </p>
          </div>

          <section className={styles.statsGrid}>
            {statsData.map((item) => (
              <StatCard key={item.id} item={item} />
            ))}
          </section>

          <section className={styles.middleGrid}>
            <RevenueChart data={revenueData} />
            <SalesCategory items={salesCategories} />
          </section>

          <section className={styles.bottomGrid}>
            <TopSellingProducts items={topSellingProducts} />
            <RecentOrders items={recentOrders} />
          </section>
        </main>
      </div>
    </div>
  );
}
