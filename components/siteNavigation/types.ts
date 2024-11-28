import { ViewProps } from "@adobe/react-spectrum";

export interface NavigationItem {
  label: string;
  isSale?: boolean;
  href?: string;
}

export interface SiteNavigationProps extends ViewProps {
  navigationItems?: NavigationItem[];
}

export interface NavigationMenuProps extends ViewProps {
  items: NavigationItem[];
}
