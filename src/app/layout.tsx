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
        <div className="appLayout">
          <Sidebar />

          <div className="appContent">
            <Header />
            <main className="appMain">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}