import React, { useEffect, useState } from "react";
import { Button, Tabs } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { removeTab, setActiveTab } from "../../../reducers/MainTabSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/hook";
import { TabPane } from "./tabPane/TabPane";
import { IMainTabs, ITab, onEditParamsType } from "src/@types/layout/MainTabs";

/**
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-07-10        이동욱           최초 생성
 */

const modules = import.meta.glob('/src/**/Page.tsx');

/**
 * @description : import.meta.glob 을 통해 얻어온 Page 컴포넌트들 중 해당 컴포넌트만 Inport 함
 * @tip : _queryString 변수 같은 경우 사용하는 곳은 없지만 추후 사용될 여지가 있어 _ 로 표기
 * @document : import.meta.glob : https://ko.vitejs.dev/guide/features#glob-import
 */
const fetchModule = async (key: string) => {
  const [path, _queryString] = key.split('?');
  return await (modules[`/src/pages/${path}/Page.tsx`]() as Promise<{ default: React.ComponentType<any> }>);
};

/**
 * @description : Tab 인터페이스 형태에서 children 속성에 컴포넌트를 추가한다
 */
const buildTabPanes = async (tabItems: ITab[]) => {
  const tabPromises = tabItems.map(async tab => {
    const page = await fetchModule(tab.key);
    return {
      ...tab,
      children: <TabPane key={tab.key} importModule={page} />
    };
  });

  return Promise.all(tabPromises);
}

/**
 * @variable currentTabItems - redux store를 통해 받아온 데이터를 view 형태로 사용하기 위한 Tabs.items 값 
 * * 탭 추가, 삭제, 선택시 redux store 값을 갱신함 
 */
export const MainTabs = ({ headerHeight, collapsed, setCollapsed }: IMainTabs) => {
  const { tabActiveKey, items } = useAppSelector(state => state.tabs);
  const dispatch = useAppDispatch();
  const [currentTabItems, setCurrentTabItems] = useState<ITab[]>([]);

  /**
   * @description 선택 : handleTabChange 를 통해 redux store에 selectedKey 키를 전달
   */
  const handleTabChange = (key: string) => {
    dispatch(setActiveTab(key));
  };

  /**
 * @description 삭제 :  redux store 해당 키를 가진 tab 제거
 */
  const handleRemoveTab = (key: string) => {
    removePane(key)
    dispatch(removeTab(key));
  };
  const onEdit = (targetKey: onEditParamsType, action: 'add' | 'remove') => {
    if (action === "remove") {
      handleRemoveTab(targetKey as string);
    }
  };


  /**
  * @description 실제 redux store랑 연관 없이 view 에서 탭을 제거 함
  */
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

  /**
   * @description 추가 : handleTabChange 를 통해 redux store 값을 추가함
   * @description 삭제 : handleRemoveTab 를 통해 redux store 값을 제거함
   * @description redux store -> 에서 꺼내온 items 배열에서 currentTabItems에 없는 항목만 필터링
   */
  useEffect(() => {
    const newCurrentTabItems = [...currentTabItems];
    const currentTabKeys = new Set(currentTabItems.map(item => item.key));
    const filterdTabItems = items.filter(item => !currentTabKeys.has(item.key));

    const fetchTabs = async () => {
      const tabsWithComponents = await buildTabPanes([...newCurrentTabItems, ...filterdTabItems]);
      setCurrentTabItems(tabsWithComponents);
    };

    if (newCurrentTabItems) {
      fetchTabs();
    }
  }, [items])

  return (
    <Tabs
      style={{
        height: '100%',
      }}
      activeKey={tabActiveKey}
      items={currentTabItems}
      onTabClick={handleTabChange}
      onEdit={onEdit}
      hideAdd
      type="editable-card"
      tabPosition={'top'}
      animated={true}
      prefixCls={'biz-tabs'}
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