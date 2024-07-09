import { TabPaneProps } from "antd";

interface MainTabsInterface {
  collapsed: boolean,
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>,
  headerHeight?: number,
}

export interface Tab extends Omit<TabPaneProps, 'tab'> {
  key: string;
  label: React.ReactNode;
}

export interface TabsState {
  tabActiveKey: string;
  items: Tab[];
}


export type onEditParamsType = React.MouseEvent | React.KeyboardEvent | string;