# 🚀 Admin Panel Dashboard

A modern **full-stack Admin Dashboard** built with **Next.js (App Router)**, **TypeScript**, and **CSS Modules**.  
This project simulates a real-world admin panel with both frontend UI and backend API logic.

---

## 🌐 Live Demo

https://admin-panel-xwiv.vercel.app/

---

## ✨ Features

- 🧭 Responsive sidebar navigation (mobile + desktop)
- 🔍 Search functionality
- 📦 Product management (Add / Edit / Delete)
- 🧾 Orders management page
- 🌙 Dark mode (Context + CSS variables)
- 📱 Fully responsive design
- 🧩 Reusable component architecture
- 🧠 Strong TypeScript typing
- 🔄 Dynamic routing (Next.js App Router)
- 🚪 Logout functionality

---

## 🔌 Backend (API)

This project includes backend logic using **Next.js API Routes**:

- `GET /api/dashboard` → Dashboard data
- `GET /api/products` → Get products
- `POST /api/products` → Add product
- `PATCH /api/products?id=` → Edit product
- `DELETE /api/products?id=` → Delete product

---

## 🛠 Tech Stack

- ⚡ Next.js (App Router)
- ⚛️ React
- 🔷 TypeScript
- 🎨 CSS Modules
- 🎨 Material UI (Modal)
- 🧱 Lucide Icons
- ☁️ Vercel (Deployment)

---

## 📸 Screenshots

| Dashboard | Orders |
|----------|--------|
| ![](./screenshots/dashboard.png) | ![](./screenshots/orders.png) |

---

## 📁 Project Structure

```bash
src/
  app/
    layout.tsx
    page.tsx

    products/
      page.tsx

    orders/
      page.tsx

    api/
      products/route.ts
      dashboard/route.ts

  components/
    layout/
      Header.tsx
      Sidebar.tsx

    products/
      ProductsPage.tsx
      ProductModal.tsx

    orders/
      OrdersPage.tsx
