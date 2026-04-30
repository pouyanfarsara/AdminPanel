import {
  statsData,
  revenueData,
  salesCategories,
  topSellingProducts,
  recentOrders,
} from "../../lib/dashboardData";

export async function GET() {
  return Response.json({
    statsData,
    revenueData,
    salesCategories,
    topSellingProducts,
    recentOrders,
  });
}