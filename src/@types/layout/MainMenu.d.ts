import { MenuItemType } from "antd/es/menu/interface";
import { ReactNode } from "react";


export interface IMenuItemObject extends MenuItemType {
  key: string;
  label?: ReactNode;
  children?: MenuItemObject[];
}


export type MenuEventType = {
  key: String,
  item: ReactComponent,
  domEvent: Event,
  selectedKeys: String[]
}

export type MenuClickEventHandler = (info: MenuEventType) => void;