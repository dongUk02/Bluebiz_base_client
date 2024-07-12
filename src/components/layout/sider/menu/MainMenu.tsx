import { useMemo, useState } from "react"
import { Menu, MenuProps } from "antd"
import { IMenuItemObject } from '../../../../@types/layout/MainMenu';
import IconLoader from "@components/icon/IconLoader";
import { useAppDispatch, useAppSelector } from "@hooks/hook";
import { addTab } from "@reducers/MainTabSlice";
import { IMenuInfoRes } from "src/@types/response/response";
import { IconLoaderProps } from "src/@types/global/global";
import { ITab } from "src/@types/layout/MainTabs";

/**
 * @description : 서버측 menu 데이터를 antd 컴포넌트의 들어갈 props 타입으로 변환하는 함수
 * @param items : 서버에서 받아온 메뉴 리스트
 * @param parentCode : pageJaCd이며 해당 값이 없을시 최상위로 판단하여 0000 값 대입
 * @returns TreeData 형태로 리턴함
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-07-01        이동욱       최초 생성
 */
const buildMenuTree = (items: IMenuInfoRes[], parentCode: string = "00000"): IMenuItemObject[] => {
  return items
    .filter((item) => item.pageMoCd === parentCode)
    .map((item) => {
      const children = buildMenuTree(items, item.pageCd);
      return {
        key: item.pageInfo.pagePath,
        label: item.pageInfo.pageNm,
        icon: <IconLoader iconName={item.menuIcon as IconLoaderProps} />,
        children: children.length ? children : undefined,
      };
    });
};

/**
 * @description    : 확장된 메뉴그룹이 있을때 해당 메뉴그룹을 닫고 그룹을 확장
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-07-01        이동욱       최초 생성
 */
const getLevelKeys = (items1: IMenuItemObject[]) => {
  const key: Record<string, number> = {};
  const func = (items2: IMenuItemObject[], level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};

const MainMenu = ({
  menuList,
}: {
  menuList: IMenuInfoRes[]
}) => {
  const [stateOpenKeys, setStateOpenKeys] = useState<string[]>([]);
  const items = useMemo(() => buildMenuTree(menuList), [menuList]);
  const levelKeys = useMemo(() => getLevelKeys(items as IMenuItemObject[]), [items]);

  const tabActiveKey = useAppSelector(state => state.tabs.tabActiveKey);
  const dispatch = useAppDispatch()

  // 확장할 수 있는 메뉴일 경우
  const onOpenChange: MenuProps['onOpenChange'] = (openKeys) => {
    const currentOpenKey = openKeys.find((key) => stateOpenKeys.indexOf(key) === -1);
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);

      setStateOpenKeys(
        openKeys
          .filter((_, index) => index !== repeatIndex)
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey]),
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };

  const onSelect: MenuProps['onSelect'] = ({ key }) => {
    const selectedMenuData = menuList.find(menu => menu.pageInfo.pagePath === key)!;
    const newTab: ITab = { key, label: selectedMenuData.pageInfo.pageNm }
    dispatch(addTab(newTab));
  }

  return (
    <Menu
      theme="dark"
      mode="inline"
      inlineIndent={14}
      items={items}
      openKeys={stateOpenKeys}
      onOpenChange={onOpenChange}
      selectedKeys={[tabActiveKey]}
      onSelect={onSelect}
    />
  )
}
export default MainMenu;