import { Provider, defaultTheme, Flex, View } from "@adobe/react-spectrum";
import { MenuItem } from "./MenuItem";
import { FooterProps } from "./types";
import styles from "./Footer.module.css";

export const Footer = ({
  menuItems,
  description,
  onSignIn,
  userIconSrc,
}: FooterProps): JSX.Element => {
  return (
    <Provider theme={defaultTheme} colorScheme="dark">
      <View UNSAFE_className={styles.footerContainer}>
        <Flex direction="column" UNSAFE_className={styles.footerContent}>
          <View UNSAFE_className={styles.navigationContainer}>
            <Flex wrap UNSAFE_className={styles.menuContainer}>
              {menuItems.map((item, index) => (
                <MenuItem
                  key={`menu-item-${index}`}
                  label={item.label}
                  isHighlighted={item.isHighlighted}
                  onClick={item.onClick}
                  ariaLabel={item.ariaLabel}
                />
              ))}
            </Flex>
            <Flex UNSAFE_className={styles.authSection}>
              <img
                src={userIconSrc}
                className={styles.userIcon}
                alt="User account"
                loading="lazy"
              />
              <button
                className={styles.signInButton}
                onClick={onSignIn}
                aria-label="Sign in to your account"
              >
                SIGN IN
              </button>
            </Flex>
          </View>
          <View UNSAFE_className={styles.footerDescription}>{description}</View>
        </Flex>
      </View>
    </Provider>
  );
};
