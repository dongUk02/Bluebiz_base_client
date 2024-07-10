import React, { useEffect, useMemo, useState } from "react";
import { Button, Tabs } from 'antd';
import { MainTabsInterface, Tab, onEditParamsType } from './MainTabs.d';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { removeTab, setActiveTab } from "../../../reducers/MainTabSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/hook";
import { TabPane } from "./tabPane/TabPane";

/**
 * @description : Tab 인터페이스 형태에서 children 속성에 컴포넌트를 추가한다
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-07-09        이동욱           최초 생성
 */
const addComponentsItems = (tabItems: Tab[]) => {
  return tabItems.map(tab => {
    return {
      ...tab,
      children: <TabPane pagePath={tab.key} />
    };
  });
}

/**
 * @variable localStorageTabItems - 렌더링 될때 redux store 에 있던 tab Item 과 activeKey 를 받아온다 
 * @variable currentTabItems - 받아온 localStorageTabItems 가지고 실제 Item component를 만듦 
 * * 탭 추가, 삭제, 선택시 redux store 값을 갱신함 
 * * redux store 의 값을 바로 메뉴화 할시 값이 갱신될 때 컴포넌트를 다시 그려 각 탭의 내용이 초기화됨.
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-07-09        이동욱           최초 생성
 */
export const MainTabs = ({ headerHeight, collapsed, setCollapsed }: MainTabsInterface) => {
  const { tabActiveKey, items } = useAppSelector(state => state.tabs);
  const localStorageTabItems = useMemo(() => addComponentsItems(items), []);
  const dispatch = useAppDispatch();
  const [currentTabItems, setCurrentTabItems] = useState(localStorageTabItems);

  const handleTabChange = (key: string) => {
    dispatch(setActiveTab(key));
  };

  const handleRemoveTab = (key: string) => {
    removePane(key)
    dispatch(removeTab(key));
  };

  const onEdit = (targetKey: onEditParamsType, action: 'add' | 'remove') => {
    if (action === "remove") {
      handleRemoveTab(targetKey as string);
    }
  };

  const removePane = (targetKey: string) => {
    let newActiveKey = tabActiveKey;
    let lastIndex = -1;
    currentTabItems.forEach((item, i) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = currentTabItems.filter((item) => item.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setCurrentTabItems(newPanes);
  };

  // add 는 menu 를 통해 값을 조작 하기때문에 값 변경 감지하여 처리..
  useEffect(() => {
    const newCurrentTabItems = [...currentTabItems];
    // currentTabItems의 key 값만 추출하여 Set으로 만듦
    const currentTabKeys = new Set(currentTabItems.map(item => item.key));
    // Items 배열에서 currentTabItems에 없는 항목만 필터링
    const [itemsOnly] = items.filter(item => !currentTabKeys.has(item.key));

    if (itemsOnly) {

      const newTabPane = {
        ...itemsOnly,
        children: <TabPane pagePath={itemsOnly.key} />
      }
      newCurrentTabItems.push(newTabPane);
      setCurrentTabItems(newCurrentTabItems);
    }
  }, [items])


  return (
    <Tabs
      activeKey={tabActiveKey}
      items={currentTabItems}
      onTabClick={handleTabChange}
      onEdit={onEdit}
      hideAdd
      type="editable-card"
      tabPosition={'top'}
      tabBarExtraContent={{
        left: (
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: headerHeight,
              height: headerHeight,
            }}
          />
        ),
      }}
    />
  )
}

export default MainTabs;