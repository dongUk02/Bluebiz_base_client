import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';
import { ITabsState } from '../@types/layout/MainTabs';

const initialState: ITabsState = {
  tabActiveKey: 'mes/home',
  items: [
    {
      key: 'mes/home',
      label: 'Home',
      closable: false,
    }
  ]
};

const tabsSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    addTab: (state, action) => {
      const existingTab = state.items.find(tab => tab.key === action.payload.key);
      if (!existingTab) {
        state.items = [...state.items, action.payload];
      }
      state.tabActiveKey = action.payload.key
    },
    removeTab: (state, action) => {
      const removeIndex = state.items.findIndex(tab => tab.key === action.payload);
      const newActiveKey = state.tabActiveKey === action.payload
        ? state.items[removeIndex - 1]?.key || ''
        : state.tabActiveKey;
      const filtedTabs = state.items.filter(tab => tab.key !== action.payload);

      state.items = filtedTabs;
      state.tabActiveKey = newActiveKey;
    },
    setActiveTab: (state, action) => {
      state.tabActiveKey = action.payload
    },
  }
});


export const { addTab, removeTab, setActiveTab } = tabsSlice.actions
export const selectTabActiveKey = (state: RootState) => state.tabs.tabActiveKey
export default tabsSlice.reducer