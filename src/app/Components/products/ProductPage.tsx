"use client";

import { useMemo, useState } from "react";
import {
  Laptop,
  Headphones,
  Watch,
  Cable,
  Smartphone,
  Mouse,
  Plus,
  Search,
  Filter,
  Pencil,
  Trash2,
  MoreVertical,
} from "lucide-react";

import styles from "./ProductsPage.module.css";

type ProductStatus = "In Stock" | "Low Stock" | "Out of Stock";

type Product = {
  id: number;
  name: string;
  sku: string;
  category: string;
  price: number;
  stock: number;
  status: ProductStatus;
  icon: React.ReactNode;
};

const productsData: Product[] = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    sku: "WH-001",
    category: "Electronics",
    price: 99.99,
    stock: 145,
    status: "In Stock",
    icon: <Headphones size={22} />,
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    sku: "SW-002",
    category: "Electronics",
    price: 199.99,
    stock: 78,
    status: "In Stock",
    icon: <Watch size={22} />,
  },
  {
    id: 3,
    name: "Laptop Stand Aluminum",
    sku: "LS-003",
    category: "Accessories",
    price: 49.99,
    stock: 8,
    status: "Low Stock",
    icon: <Laptop size={22} />,
  },
  {
    id: 4,
    name: "USB-C Cable 6ft",
    sku: "UC-004",
    category: "Accessories",
    price: 19.99,
    stock: 0,
    status: "Out of Stock",
    icon: <Cable size={22} />,
  },
  {
    id: 5,
    name: "Phone Case Premium",
    sku: "PC-005",
    category: "Accessories",
    price: 29.99,
    stock: 234,
    status: "In Stock",
    icon: <Smartphone size={22} />,
  },
  {
    id: 6,
    name: "Wireless Mouse",
    sku: "WM-006",
    category: "Electronics",
    price: 39.99,
    stock: 156,
    status: "In Stock",
    icon: <Mouse size={22} />,
  },
];

export default function ProductsPage() {
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return productsData.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  return (
    <section className={styles.productsPage}>
      <div className={styles.topBar}>
        <div>
          <h1 className="whitespace-nowrap">Product Management</h1>
          <p className="whitespace-nowrap">
            Manage your product catalog, inventory, and categories
          </p>
        </div>

        <div>
          <button className={styles.addButton}>
            <Plus size={18} />
            Add Product
          </button>
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <div className={styles.tableActions}>
          <div className={styles.searchBox}>
            <Search size={18} />
            <input
              type="text"
              placeholder="Search products..."
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
          <span>Product</span>
          <span>SKU</span>
          <span>Category</span>
          <span className="hidden sm:block">Price</span>
          <span className="hidden sm:block">Stock</span>
          <span className="hidden sm:block">Status</span>
          <span className="hidden sm:block">Actions</span>
        </div>

        <div className={styles.tableBody}>
          {filteredProducts.map((product) => (
            <div className={styles.tableRow} key={product.id}>
              <div className={styles.productCell}>
                <div className={styles.productIcon}>{product.icon}</div>
                <span className="whitespace-nowrap">{product.name}</span>
              </div>

              <span>{product.sku}</span>
              <span>{product.category}</span>
              <span className="hidden sm:block">${product.price}</span>
              <span className="hidden sm:block">{product.stock}</span>

              <span
                className={`${styles.status} ${
                  product.status === "In Stock"
                    ? styles.inStock
                    : product.status === "Low Stock"
                      ? styles.lowStock
                      : styles.outOfStock
                }`}
              >
                {product.status}
              </span>

              <div className={styles.actions}>
                <button>
                  <Pencil size={18} />
                </button>
                <button>
                  <Trash2 size={18} />
                </button>
                <button>
                  <MoreVertical size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
