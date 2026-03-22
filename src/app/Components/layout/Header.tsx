"use client";

import { ChangeEvent, useState } from "react";
import styles from "./Header.module.css";
import {
  Bell,
  LogOut,
  Mail,
  MessageSquare,
  Search,
  UserRound,
} from "lucide-react";

export default function Header() {
  const [search, setSearch] = useState<string>("");
  const [isopen, setisopen] = useState<boolean>(false);
  const [opennotif, setopennotif] = useState<boolean>(false);

  const handleopennotif = () => setopennotif((prev) => !prev);

  const handleDropdown = () => setisopen((prev) => !prev);

  const handlerSearchChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log(search);
      setSearch("");
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.searchBox}>
        <Search size={18} />
        <input
          type="text"
          onChange={handlerSearchChange}
          onKeyDown={handleKeyDown}
          value={search}
          placeholder="Search products, orders, users..."
        />
      </div>

      <div className={styles.rightSide}>
        <button className={styles.notification} onClick={handleopennotif}>
          <Bell size={20} />
          <span>3</span>
          {opennotif && (
            <div className={styles.dropdown}>
              <p className={styles.dropdownItem}>
                <Mail /> Email Notifications{" "}
              </p>
              <p className={styles.dropdownItem}>
                <MessageSquare size={17} /> SmS Notifications{" "}
              </p>
              <p className={styles.dropdownItem}>
                {" "}
                <Bell />
                Push Notifications
              </p>
            </div>
          )}
        </button>

        <div className={styles.profile} onClick={handleDropdown}>
          <div className={styles.avatar}>
            <UserRound size={20} />
          </div>

          <div className={styles.userInfo}>
            <h4>Admin User</h4>
            <p>admin@store.com</p>
          </div>

          {isopen && (
            <div className={styles.dropdown}>
              <p className={styles.dropdownItem}>Profile</p>
              <p className={styles.dropdownItem}>Settings</p>
              <p className={styles.dropdownItem}>
                <LogOut size={14} />
                Logout
              </p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
