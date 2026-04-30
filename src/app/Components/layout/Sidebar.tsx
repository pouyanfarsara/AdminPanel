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
  ChevronLeft,
  Sun,
  Moon,
  X,
  ShoppingBag,
  LogOut,
} from "lucide-react";
import { useTheme } from "@/app/context/ThemeContext";
import Button from "../button/Button";

type MenuItem = {
  id: number;
  label: string;
  href: string;
  icon: React.ComponentType<{ size?: number }>;
};

const menuItems: MenuItem[] = [
  { id: 1, label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { id: 2, label: "Products", icon: Package, href: "/products" },
  { id: 3, label: "Orders", icon: ShoppingCart, href: "/orders" },
  { id: 4, label: "Users", icon: Users, href: "/orders" },
  { id: 5, label: "Analytics", icon: BarChart3, href: "/products" },
  { id: 6, label: "Promotions", icon: Tag, href: "/products" },
  { id: 7, label: "Settings", icon: Settings, href: "/" },
];

const COLLAPSE_BREAKPOINT = 1000;
const ICON_ONLY_BREAKPOINT = 900;
const MOBILE_BREAKPOINT = 768;

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isIconOnly, setIsIconOnly] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const mobile = width <= MOBILE_BREAKPOINT;

      setIsMobile(mobile);
      setIsCollapsed(width < COLLAPSE_BREAKPOINT);
      setIsIconOnly(width < ICON_ONLY_BREAKPOINT);

      if (!mobile) {
        setIsMobileOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLogout = () => {
    setIsMobileOpen(false);

    // اینجا لاگ‌اوت واقعی پروژه‌ات رو وصل کن
    // مثلا:
    // router.push("/login");
    console.log("logout");
  };

  const shouldHideLabels = isMobile ? false : isCollapsed || isIconOnly;

  return (
    <>
      {isMobile && !isMobileOpen && (
        <Button
          type="button"
          className={styles.mobileMenuBtn}
          onClick={() => setIsMobileOpen(true)}
          aria-label="Open menu"
        >
          <ShoppingBag size={22} />
        </Button>
      )}

      {isMobile && isMobileOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <aside
        className={`${styles.sidebar} ${
          shouldHideLabels ? styles.sidebarCollapsed : ""
        } ${isMobileOpen ? styles.open : ""}`}
      >
        <div>
          <div className={styles.logoBox}>
            <div
              className={styles.logoIcon}
              onClick={() => {
                if (!isMobile) {
                  setIsCollapsed((prev) => !prev);
                }
              }}
              aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              <ShoppingBag size={22} />
            </div>

            {!shouldHideLabels && (
              <span className={styles.logoText}>Admin Panel</span>
            )}

            {isMobile && (
              <Button
                type="button"
                className={styles.mobileCloseBtn}
                onClick={() => setIsMobileOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </Button>
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
                  onClick={() => setIsMobileOpen(false)}
                >
                  <Icon size={20} />
                  {!shouldHideLabels && <span>{item.label}</span>}
                </Link>
              );
            })}

            <Button
              type="button"
              onClick={toggleTheme}
              className={styles.navItem}
              title={shouldHideLabels ? "Toggle theme" : ""}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              {!shouldHideLabels && (
                <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
              )}
            </Button>

            {isMobile && (
              <Button
                type="button"
                className={`${styles.navItem} ${styles.mobileLogout}`}
                onClick={handleLogout}
              >
                <LogOut size={20} />
                <span>Logout</span>
              </Button>
            )}
          </nav>
        </div>

        {!isMobile && (
          <Button
            className={styles.collapseBtn}
            onClick={() => setIsCollapsed((prev) => !prev)}
          >
            <ChevronLeft
              size={20}
              className={shouldHideLabels ? styles.rotatedIcon : ""}
            />
          </Button>
        )}
      </aside>
    </>
  );
}
