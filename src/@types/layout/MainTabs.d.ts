import { TabPaneProps } from "antd";

export type onEditParamsType = React.MouseEvent | React.KeyboardEvent | string;

export interface IMainTabs {
  collapsed: boolean,
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>,
  headerHeight?: number,
}

export interface ITab extends Omit<TabPaneProps, 'tab'> {
  key: string;
  label: React.ReactNode;
}

export interface ITabsState {
  tabActiveKey: string;
  items: Tab[];
}

