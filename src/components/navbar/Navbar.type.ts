export interface NavbarItem {
  text: string;
  pageUrl: string;
  children?: NavbarItem[];
}

export interface NavbarProps {
  items: NavbarItem[];
}
