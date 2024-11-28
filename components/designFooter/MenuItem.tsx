import { View } from "@adobe/react-spectrum";
import { MenuItemProps } from "./types";
import styles from "./Footer.module.css";

export const MenuItem = ({
  label,
  isHighlighted,
  onClick,
  ariaLabel,
}: MenuItemProps): JSX.Element => (
  <View
    onClick={onClick}
    role="button"
    tabIndex={0}
    aria-label={ariaLabel || label}
    UNSAFE_className={
      isHighlighted ? styles.highlightedMenuItem : styles.menuItem
    }
  >
    {label}
  </View>
);
