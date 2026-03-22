import DashboardPage from "./Components/dashboard/DashboardPage";

import ProductsPage from "./Components/layout/ProductPage";
import Orders from "./orders/page";

export default function HomePage() {
  return (
    <>
      <DashboardPage />
      <ProductsPage />
      <Orders/>
    </>
  );
}
