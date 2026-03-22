"use client";

import { useMemo, useState } from "react";
import { Search, Filter, Eye, Truck } from "lucide-react";
import styles from "./OrdersPage.module.css";

type orderData = {
  id: string;
  customer: string;
  email: string;
  date: string;
  items: number;
  total: number;
  status: orderstatustype;
};

type orderstatustype =
  | "Pending"
  | "Processing"
  | "Shipped"
  | "Delivered"
  | "Cancelled";

const ordersData: orderData[] = [
  {
    id: "#12345",
    customer: "John Doe",
    email: "john@example.com",
    date: "2025-11-11",
    items: 3,
    total: 129.99,
    status: "Delivered",
  },
  {
    id: "#12344",
    customer: "Jane Smith",
    email: "jane@example.com",
    date: "2025-11-11",
    items: 2,
    total: 89.99,
    status: "Processing",
  },
  {
    id: "#12343",
    customer: "Mike Johnson",
    email: "mike@example.com",
    date: "2025-11-10",
    items: 4,
    total: 199.99,
    status: "Shipped",
  },
  {
    id: "#12342",
    customer: "Sarah Williams",
    email: "sarah@example.com",
    date: "2025-11-10",
    items: 1,
    total: 59.99,
    status: "Pending",
  },
  {
    id: "#12341",
    customer: "David Brown",
    email: "david@example.com",
    date: "2025-11-09",
    items: 2,
    total: 149.99,
    status: "Cancelled",
  },
];
type OrderTab =
  | "All Orders"
  | "Pending"
  | "Processing"
  | "Shipped"
  | "Delivered";
const tabs: OrderTab[] = [
  "All Orders",
  "Pending",
  "Processing",
  "Shipped",
  "Delivered",
];

export default function OrdersPage() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<OrderTab>("All Orders");

  const filteredOrders = useMemo(() => {
    return ordersData.filter((order) => {
      const matchesSearch =
        order.id.toLowerCase().includes(search.toLowerCase()) ||
        order.customer.toLowerCase().includes(search.toLowerCase()) ||
        order.email.toLowerCase().includes(search.toLowerCase());

      const matchesTab =
        activeTab === "All Orders" || order.status === activeTab;

      return matchesSearch && matchesTab;
    });
  }, [search, activeTab]);

 const getStatusClass = (status: orderstatustype): string => {
  switch (status) {
    case "Delivered":
      return styles.delivered;
    case "Processing":
      return styles.processing;
    case "Shipped":
      return styles.shipped;
    case "Pending":
      return styles.pending;
    case "Cancelled":
      return styles.cancelled;
  }
};
  return (
    <section className={styles.ordersPage}>
      <div className={styles.topBar}>
        <div>
          <h1>Order Management</h1>
          <p>Track and manage customer orders, shipments, and returns</p>
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <div className={styles.tabs}>
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`${styles.tabButton} ${
                activeTab === tab ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className={styles.tableActions}>
          <div className={styles.searchBox}>
            <Search size={18} />
            <input
              type="text"
              placeholder="Search orders by ID, customer, email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <button className={styles.filterButton}>
            <Filter size={18} />
            Filters
          </button>
        </div>

        <div className={styles.tableHeader}>
          <span>Order ID</span>
          <span>Customer</span>
          <span>Date</span>
          <span>Items</span>
          <span>Total</span>
          <span>Status</span>
          <span>Actions</span>
        </div>

        <div className={styles.tableBody}>
          {filteredOrders.map((order) => (
            <div className={styles.tableRow} key={order.id}>
              <span>{order.id}</span>

              <div className={styles.customerCell}>
                <strong>{order.customer}</strong>
                <p>{order.email}</p>
              </div>

              <span>{order.date}</span>
              <span>{order.items}</span>
              <span>${order.total.toFixed(2)}</span>

              <span
                className={`${styles.statusBadge} ${getStatusClass(
                  order.status,
                )}`}
              >
                {order.status}
              </span>

              <div className={styles.actions}>
                <button>
                  <Eye size={18} />
                </button>
                <button>
                  <Truck size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <p>Showing {filteredOrders.length} orders</p>

          <div className={styles.pagination}>
            <button>Previous</button>
            <button>Next</button>
          </div>
        </div>
      </div>
    </section>
  );
}
