import { Layout } from "antd"
import { MainLayoutStyled } from "./MainLayout.styles"
import { useState } from "react";;
import { IMenuInfoRes } from "../../@types/response/response";
import MainMenu from "./sider/menu/MainMenu";
import MainLogo from "./sider/menu/MainLogo";
import MainTabs from "./tabs/MainTabs";

const { Sider, Footer } = Layout

interface IMainLayout {
  menuList: IMenuInfoRes[]
}

const MainLayout = ({ menuList }: IMainLayout) => {
  const [collapsed, setCollapsed] = useState(false);
  const headerHeight = 36;

  return (
    <MainLayoutStyled $headerHeight={headerHeight}>
      <Layout className="main-layout">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <MainLogo collapsed={collapsed} />
          <MainMenu menuList={menuList} />
        </Sider>
        <Layout>
          <MainTabs headerHeight={headerHeight} collapsed={collapsed} setCollapsed={setCollapsed} />
          <Footer>© 2024. Bluebiz. All rights reserved.</Footer>
        </Layout>
      </Layout>
    </MainLayoutStyled>
  )
}

export default MainLayout