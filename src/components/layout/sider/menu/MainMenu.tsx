import { Menu } from "antd"
import { IconLoaderProps, MenuItemObject, MenuObject } from "../../../../utils/common.d"
import IconLoader from "../../../icon/IconLoader"
import { useMemo } from "react"

const buildMenuTree = (items: MenuObject[], parentCode: string = "0000"): MenuItemObject[] => {
  return items
    .filter((item) => item.pageCd === parentCode)
    .map((item) => {
      const children = buildMenuTree(items, item.pageJaCd);
      return {
        ...item,
        key: item.pageCd,
        label: item.pageNm,
        icon: <IconLoader iconName={item.menuIcon as IconLoaderProps} />,
        children: children.length ? children : undefined,
      };
    });
};


const MainMenu = ({ menuList }: { menuList: MenuObject[] }) => {
  const items = useMemo(() => buildMenuTree(menuList), [menuList]);
  return (
    <Menu
      theme="dark"
      mode="inline"
      inlineIndent={14}
      items={items}
    />
  )
}


export default MainMenu