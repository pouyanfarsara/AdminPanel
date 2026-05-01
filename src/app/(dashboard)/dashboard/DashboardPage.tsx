import styles from "./DashboardPage.module.css";

import StatCard from "./StatCard";
import RevenueChart from "./RevenueChart";
import SalesCategory from "./SalesCategory";
import TopSellingProducts from "./TopSellingProducts";
import RecentOrders from "./RecentOrders";

async function getDashboardData() {
  const res = await fetch("https://admin-panel-avws.vercel.app/api/dashboard", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch dashboard data");
  }

  return res.json();
}

export default async function DashboardPage() {
  const {
    statsData,
    revenueData,
    salesCategories,
    topSellingProducts,
    recentOrders,
  } = await getDashboardData();

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
            {statsData.map((item: any) => (
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
