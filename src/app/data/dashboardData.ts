export const statsData = [
  {
    id: 1,
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    positive: true,
    icon: "dollar",
    color: "green",
  },
] as const;

export const revenueData = [
  { month: "Jan", value: 35 },
  { month: "Feb", value: 58 },
  { month: "Mar", value: 45 },
  { month: "Apr", value: 72 },
  { month: "May", value: 63 },
  { month: "Jun", value: 84 },
  { month: "Jul", value: 79 },
];

export const salesCategories = [
  { id: 1, name: "Electronics", percent: 45, color: "#2563eb" },
  { id: 2, name: "Fashion", percent: 25, color: "#9333ea" },
  { id: 3, name: "Home", percent: 15, color: "#f97316" },
  { id: 4, name: "Sports", percent: 15, color: "#16a34a" },
];

export const topSellingProducts = [
  { id: 1, name: "Wireless Headphones", sales: 1245, amount: "$124,500" },
  { id: 2, name: "Smart Watch", sales: 982, amount: "$196,400" },
  { id: 3, name: "Laptop Stand", sales: 856, amount: "$42,800" },
  { id: 4, name: "USB-C Cable", sales: 745, amount: "$14,900" },
  { id: 5, name: "Phone Case", sales: 623, amount: "$18,690" },
];

export const recentOrders = [
  { id: "#12345", customer: "John Doe", price: "$129.99", status: "Delivered" },
  { id: "#12344", customer: "Jane Smith", price: "$89.99", status: "Processing" },
  { id: "#12343", customer: "Mike Johnson", price: "$199.99", status: "Shipped" },
  { id: "#12342", customer: "Sarah Williams", price: "$59.99", status: "Pending" },
];