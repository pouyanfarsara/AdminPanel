"use client";

import { useMemo, useState, type ChangeEvent } from "react";
import { Search, Filter, Eye, Truck } from "lucide-react";
import styles from "./OrdersPage.module.css";

type OrderStatus =
  | "Pending"
  | "Processing"
  | "Shipped"
  | "Delivered"
  | "Cancelled";

type Order = {
  id: string;
  customer: string;
  email: string;
  date: string;
  items: number;
  total: number;
  status: OrderStatus;
};

type OrderTab =
  | "All Orders"
  | "Pending"
  | "Processing"
  | "Shipped"
  | "Delivered";

const ordersData: Order[] = [
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

const tabs: OrderTab[] = [
  "All Orders",
  "Pending",
  "Processing",
  "Shipped",
  "Delivered",
];

export default function OrdersPage() {
  const [search, setSearch] = useState<string>("");
  const [activeTab, setActiveTab] = useState<OrderTab>("All Orders");

  const filteredOrders = useMemo((): Order[] => {
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

  const getStatusClass = (status: OrderStatus): string => {
    if (status === "Delivered") return styles.delivered;
    if (status === "Processing") return styles.processing;
    if (status === "Shipped") return styles.shipped;
    if (status === "Pending") return styles.pending;
    return styles.cancelled;
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
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
              type="button"
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
              onChange={handleSearchChange}
            />
          </div>

          <button className={styles.filterButton} type="button">
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
                  order.status
                )}`}
              >
                {order.status}
              </span>

              <div className={styles.actions}>
                <button type="button">
                  <Eye size={18} />
                </button>
                <button type="button">
                  <Truck size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <p>Showing {filteredOrders.length} orders</p>

          <div className={styles.pagination}>
            <button type="button">Previous</button>
            <button type="button">Next</button>
          </div>
        </div>
      </div>
    </section>
  );
}