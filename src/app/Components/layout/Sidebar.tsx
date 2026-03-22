"use client";
import Link from "next/link";
import styles from "./Sidebar.module.css";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Tag,
  Settings,
  ShoppingBag,
  ChevronLeft,
} from "lucide-react";
const menuItems = [
  { id: 1, label: "Dashboard", icon: LayoutDashboard, href: "/" },
  { id: 2, label: "Products", icon: Package, href: "/products" },
  { id: 3, label: "Orders", icon: ShoppingCart, href: "/orders" },
  { id: 4, label: "Users", icon: Users, href: "/orders" },
  { id: 5, label: "Analytics", icon: BarChart3, href: "/products" },
  { id: 6, label: "Promotions", icon: Tag, href: "/products" },
  { id: 7, label: "Settings", icon: Settings, href: "/" },
];

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div>
        <div className={styles.logoBox}>
          <div className={styles.logoIcon}>
            <ShoppingBag size={22} />
          </div>
          <span>Admin Panel</span>
        </div>

        <nav className={styles.nav}>
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link key={item.id} href={item.href} className={styles.navItem}>
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <button className={styles.collapseBtn}>
        <ChevronLeft size={20} />
      </button>
    </aside>
  );
}
