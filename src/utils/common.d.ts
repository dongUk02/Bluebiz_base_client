import { MenuItemType } from 'antd/es/menu/interface';

export type IconLoaderProps = keyof typeof import('@ant-design/icons');

export interface MenuObject {
  pageCd: string;
  pageJaCd: string;
  pageNm: string;
  menuCrdt: Date; 
  menuDepth: number;
  menuIcon?: IconLoaderProps;
  menuSabn: string;
  menuSeq?: number;
  menuUpdt?: Date; 
  custIdx: number;
  factIdx: number;
}

export interface MenuItemObject extends MenuItemType {
  key: string;
  label?: ReactNode;
  children?: MenuItemRouteObject[];
}