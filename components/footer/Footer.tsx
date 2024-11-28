import React from "react";
import styles from "./Footer.module.css";
import { NavigationMenu } from "./NavigationMenu";
import { FooterProps } from "./types";

export const Footer: React.FC = () => {
  const navigationItems = [
    { label: "WOMEN" },
    { label: "MEN" },
    { label: "COLLECTIONS" },
    { label: "SHOP ALL" },
    { label: "SALE", isSale: true },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.topSection}>
          <NavigationMenu items={navigationItems} />
          <div className={styles.authSection}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/435cf78d37e94437ab4fec332b870af7/f2f2d7e5efa2dd8cf4ba3959d019afaf1156cc8f2a4b88e4cce0ec0ad76cff90?apiKey=435cf78d37e94437ab4fec332b870af7&"
              className={styles.authIcon}
              alt=""
            />
            <button className={styles.signInButton} tabIndex={0}>
              SIGN IN
            </button>
          </div>
        </div>
        <p className={styles.footerText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          posuere erat a ante vestibulum, in volutpat ligula elementum.
        </p>
      </div>
    </footer>
  );
};
