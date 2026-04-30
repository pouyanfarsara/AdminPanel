import { ReactNode } from "react";
import ThemeProvider from "../context/ThemeContext";
import Sidebar from "../Components/layout/Sidebar";
import Header from "../Components/layout/Header";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ThemeProvider>
      <div className="appLayout">
        <Sidebar />

        <div className="appContent">
          <Header />
          <main className="appMain">{children}</main>
        </div>
      </div>
    </ThemeProvider>
  );
}