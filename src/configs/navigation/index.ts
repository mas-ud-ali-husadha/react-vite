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
        title: "Menu",
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
      },
      {
        key: "setting.item2",
        path: "/collapse-menu-item-view-2",
        title: "Menu Kategori",
        type: NAV_ITEM_TYPE_ITEM,
      },
      {
        key: "setting.item3",
        path: "/collapse-menu-item-view-2",
        title: "Customer",
        type: NAV_ITEM_TYPE_ITEM,
      },
      {
        key: "setting.item4",
        path: "/collapse-menu-item-view-2",
        title: "Promo",
        type: NAV_ITEM_TYPE_ITEM,
      },
      {
        key: "setting.item5",
        path: "/collapse-menu-item-view-2",
        title: "Diskon",
        type: NAV_ITEM_TYPE_ITEM,
      },
      {
        key: "setting.item6",
        path: "/collapse-menu-item-view-2",
        title: "Voucher",
        type: NAV_ITEM_TYPE_ITEM,
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
        title: "Menu",
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
      },
      {
        key: "setting.item2",
        path: "/collapse-menu-item-view-2",
        title: "Menu Kategori",
        type: NAV_ITEM_TYPE_ITEM,
      },
      {
        key: "setting.item3",
        path: "/collapse-menu-item-view-2",
        title: "Customer",
        type: NAV_ITEM_TYPE_ITEM,
      },
      {
        key: "setting.item4",
        path: "/collapse-menu-item-view-2",
        title: "Promo",
        type: NAV_ITEM_TYPE_ITEM,
      },
      {
        key: "setting.item5",
        path: "/collapse-menu-item-view-2",
        title: "Diskon",
        type: NAV_ITEM_TYPE_ITEM,
      },
      {
        key: "setting.item6",
        path: "/collapse-menu-item-view-2",
        title: "Voucher",
        type: NAV_ITEM_TYPE_ITEM,
      },
    ],
  },
];

export default navigationConfig;