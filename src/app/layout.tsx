import "./globals.css";
import Sidebar from "./Components/layout/Sidebar";
import Header from "./Components/layout/Header";
import { ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: "flex", minHeight: "100vh" }}>
          <Sidebar />

          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <Header />
            <main style={{ flex: 1 }}>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}