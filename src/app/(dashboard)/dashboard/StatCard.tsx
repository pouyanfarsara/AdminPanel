"use client";

import styles from "./StatCard.module.css";
import {
  ArrowUpRight,
  DollarSign,
  ShoppingCart,
  Users,
  Package,
} from "lucide-react";

const iconMap = {
  dollar: DollarSign,
  cart: ShoppingCart,
  users: Users,
  box: Package,
};

type StatItem = {
  icon: "dollar" | "cart" | "users" | "box";
  color: "green" | "blue" | "purple" | "orange";
  positive: boolean;
  change: string;
  title: string;
  value: string;
};
type StatCardProps = {
  item: StatItem;
};
export default function StatCard({ item }: StatCardProps) {
  const Icon = iconMap[item.icon];

  return (
    <div className={styles.card}>
      <div className={styles.topRow}>
        <div className={`${styles.iconBox} ${styles[item.color]}`}>
          <Icon size={24} />
        </div>

        <div
          className={`${styles.change} ${item.positive ? styles.positive : styles.negative}`}
        >
          <ArrowUpRight size={18} />
          <span>{item.change}</span>
        </div>
      </div>

      <div className={styles.info}>
        <p>{item.title}</p>
        <h3>{item.value}</h3>
      </div>
    </div>
  );
}
