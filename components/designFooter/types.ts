export interface MenuItemProps {
  label: string;
  isHighlighted?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
}

export interface FooterProps {
  menuItems: MenuItemProps[];
  description: string;
  onSignIn: () => void;
  userIconSrc: string;
}
