import { MenuItemType } from "antd/es/menu/interface";
import { ReactNode } from "react";


export interface MenuItemObject extends MenuItemType {
  key: string;
  label?: ReactNode;
  children?: MenuItemObject[];
}


export type IMenuEvent = {
  key: String,
  item: ReactComponent,
  domEvent: Event,
  selectedKeys: String[]
}

export type MenuClickEventHandler = (info: IMenuEvent) => void;