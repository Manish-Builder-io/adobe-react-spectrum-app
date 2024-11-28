export interface NavigationItem {
  label: string;
  isSale?: boolean;
}

export interface FooterProps {
  navigationItems: NavigationItem[];
}
