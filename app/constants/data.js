import USICON from "@/public/us.png";
import BdIcon from "@/public/bd.svg";
import { Home, Package } from "lucide-react";
export const languages = [
  { code: "en", name: "English" },
  { code: "bn", name: "Bangla" },
];

export const currencies = [
  { code: "USD", symbol: "$", flag: USICON },
  { code: "BDT", symbol: "৳", flag: BdIcon },
];

export const navigationItems = [
  {
    label: "Deals of the Week",
    href: "/deals",
    badge: "Hot",
    badgeColor: "bg-red-500",
  },
  { label: "New Arrivals", href: "/new-arrivals" },
  { label: "Men", href: "/men" },
  { label: "Women", href: "/women" },
  { label: "Kids", href: "/kids" },
  {
    label: "Sale",
    href: "/sale",
    badge: "20% OFF",
    badgeColor: "bg-brand-primary",
  },
];

export const sidebarItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    label: "Products",
    href: "/dashboard/products",
    icon: Package,
  },
];
