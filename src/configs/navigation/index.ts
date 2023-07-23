import {
  NAV_ITEM_TYPE_COLLAPSE,
  NAV_ITEM_TYPE_ITEM,
} from "@/constants/navigation";

export interface NavigationItem {
  key: string;
  path: string;
  title: string;
  icon?: string;
  type: "title" | "collapse" | "item";
  authority?: string[];
  subMenu?: NavigationItem[];
}

const navigationConfig: NavigationItem[] = [
  {
    key: "setting",
    title: "Setting",
    path: "",
    type: NAV_ITEM_TYPE_COLLAPSE,
    authority: [],
    subMenu: [
      {
        key: "setting.item1",
        path: "/",
        title: "User",
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
      },
    ],
  },
  {
    key: "transaksi",
    path: "/single-menu-view",
    title: "Transaksi",
    type: NAV_ITEM_TYPE_ITEM,
  },
  {
    key: "laporan",
    path: "",
    title: "Laporan",
    type: NAV_ITEM_TYPE_COLLAPSE,
    authority: [],
    subMenu: [
      {
        key: "setting.item1",
        path: "/collapse-menu-item-view-1",
        title: "Sub menu 1",
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
      },
    ],
  },
];

export default navigationConfig;
