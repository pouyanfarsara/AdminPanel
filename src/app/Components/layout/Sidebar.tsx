"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
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
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "@/app/context/ThemeContext";

type MenuItem = {
  id: number;
  label: string;
  href: string;
  icon: React.ComponentType<{ size?: number }>;
};

const menuItems: MenuItem[] = [
  { id: 1, label: "Dashboard", icon: LayoutDashboard, href: "/" },
  { id: 2, label: "Products", icon: Package, href: "/products" },
  { id: 3, label: "Orders", icon: ShoppingCart, href: "/orders" },
  { id: 4, label: "Users", icon: Users, href: "/orders" },
  { id: 5, label: "Analytics", icon: BarChart3, href: "/products" },
  { id: 6, label: "Promotions", icon: Tag, href: "/products" },
  { id: 7, label: "Settings", icon: Settings, href: "/" },
];

const COLLAPSE_BREAKPOINT = 1000;
const ICON_ONLY_BREAKPOINT = 900;

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isIconOnly, setIsIconOnly] = useState(false);

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      setIsCollapsed(width < COLLAPSE_BREAKPOINT);
      setIsIconOnly(width < ICON_ONLY_BREAKPOINT);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const shouldHideLabels = isCollapsed || isIconOnly;

  return (
    <aside
      className={`${styles.sidebar} ${
        shouldHideLabels ? styles.sidebarCollapsed : ""
      }`}
    >
      <div>
       
        <div className={styles.logoBox}>
          <div className={styles.logoIcon}  onClick={() => setIsCollapsed((prev) => !prev)}
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}>
            <ShoppingBag size={22} />
          </div>

          {!isIconOnly && !isCollapsed && (
            <span className={styles.logoText}>Admin Panel</span>
          )}
        </div>

      
        <nav className={styles.nav}>
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.id}
                href={item.href}
                className={styles.navItem}
                title={shouldHideLabels ? item.label : ""}
              >
                <Icon size={20} />
                {!shouldHideLabels && <span>{item.label}</span>}
              </Link>
            );
          })}

          
          <button
            type="button"
            onClick={toggleTheme}
            className={styles.navItem}
            title={shouldHideLabels ? "Toggle theme" : ""}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            {!shouldHideLabels && (
              <span>
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </span>
            )}
          </button>
        </nav>
      </div>

      
      <button
        type="button"
        className={styles.collapseBtn}
        onClick={() => setIsCollapsed((prev) => !prev)}
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        <ChevronLeft
          size={20}
          className={shouldHideLabels ? styles.rotatedIcon : ""}
        />
      </button>
    </aside>
  );
}