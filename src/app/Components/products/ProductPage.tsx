"use client";
import toast from "react-hot-toast";
import { useMemo, useState ,useEffect} from "react";
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
import Button from "../button/Button";
import ProductModal from "../addproductmodal";

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
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
const [editingProduct, setEditingProduct] = useState<Product | null>(null);
async function handleDeleteProduct(id: number) {
  toast((t) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <span>Are you sure you want to delete?</span>

      <div style={{ display: "flex", gap: 8 }}>
        <button
          style={{
            background: "red",
            color: "white",
            padding: "4px 8px",
            borderRadius: 4,
          }}
          onClick={async () => {
            toast.dismiss(t.id);

            const res = await fetch(`/api/products?id=${id}`, {
              method: "DELETE",
            });

            if (!res.ok) {
              toast.error("Failed to delete product");
              return;
            }

            toast.success("Product deleted");
            fetchProducts();
          }}
        >
          Delete
        </button>

        <button
          style={{
            background: "gray",
            color: "white",
            padding: "4px 8px",
            borderRadius: 4,
          }}
          onClick={() => toast.dismiss(t.id)}
        >
          Cancel
        </button>
      </div>
    </div>
  ));
}
async function fetchProducts() {
  try {
    setLoading(true);

    const res = await fetch("/api/products");

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await res.json();
    setProducts(data);
  } catch {
    setError("Something went wrong while loading products");
  } finally {
    setLoading(false);
  }
}
useEffect(() => {
  fetchProducts();
}, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search,products]);

  if (loading) {
  return <p>Loading products...</p>;
}

if (error) {
  return <p>{error}</p>;
}
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
 <Button
  className={styles.addButton}
  onClick={() => {
    setEditingProduct(null);
    setOpen(true);
  }}
>
  <Plus size={18} />
  Add Product
</Button>

<ProductModal
  open={open}
  onClose={() => {
    setOpen(false);
    setEditingProduct(null);
  }}
  onSuccess={fetchProducts}
  productToEdit={editingProduct}
/>
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

          <Button className={styles.filterButton}>
            <Filter size={18} />
            Filters
          </Button>
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
  {filteredProducts.length === 0 ? (
    <div className={styles.emptyState}>
      <p>No products found.</p>
      <span>Try changing your search or add a new product.</span>
    </div>
  ) : (
    filteredProducts.map((product) => (
      <div className={styles.tableRow} key={product.id}>
        {/* همون کد قبلی محصول */}
      </div>
    ))
  )}
</div>
      </div>
    </section>
  );
}



