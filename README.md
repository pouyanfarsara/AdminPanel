# 🚀 Admin Panel Dashboard

A modern and clean **Admin Dashboard** built with **Next.js**, **TypeScript**, and **CSS Modules**.  
Designed to simulate a real-world admin panel experience with scalable architecture and typed data handling.

---

## ✨ Features

- 🧭 Sidebar navigation
- 🔍 Search functionality
- 📦 Product management page
- 🧾 Orders management page
- 🌙 Dark mode support (Context + CSS variables)
- 🎯 Dynamic routing (Next.js App Router)
- 🧩 Reusable components
- 🧠 Strong TypeScript typing (union types, state typing)
- 📱 Desktop-first design (optimized for large screens)

---

## 📸 Screenshots

| Dashboard | Products |
| ![](/screenshots/dashboard.jng) | ![](/screenshots/product.jng) |

| Orders | Dark Mode |

![Cart](./screenshots/chrt.jng)

---

## 🛠 Tech Stack

- ⚡ **Next.js**
- ⚛️ **React**
- 🔷 **TypeScript**
- 🎨 **CSS Modules**
- 🧱 **Lucide Icons**
- 🎨 **Material UI (Dialog / Modal)**

---

## 📁 Project Structure

```bash
src/
  app/
    layout.tsx        # Shared layout (Sidebar + Header)
    page.tsx          # Dashboard

    products/
      page.tsx

    orders/
      page.tsx

    components/
      layout/
        Header.tsx
        Sidebar.tsx

      products/
        ProductsPage.tsx

      orders/
        OrdersPage.tsx
