import React from "react";
import styles from "./Footer.module.css";
import { NavigationItem } from "./types";

interface NavigationMenuProps {
  items: NavigationItem[];
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({ items }) => {
  return (
    <nav className={styles.navigationMenu}>
      {items.map((item, index) => (
        <button
          key={index}
          className={item.isSale ? styles.saleLink : styles.navLink}
          tabIndex={0}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};
